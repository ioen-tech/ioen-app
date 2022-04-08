import jwt from 'jsonwebtoken'
import mock from '@/@fake-db/mock'

const data = {
  users: [
    {
      id: 1,
      fullName: 'John Doe',
      username: 'johndoe',
      password: 'admin',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/1.png'),
      email: 'admin@materio.com',
      role: 'admin',
      ability: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      username: 'janedoe',
      password: 'client',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/2.png'),
      email: 'client@materio.com',
      role: 'client',
      ability: [
        {
          action: 'read',
          subject: 'ACL',
        },
        {
          action: 'read',
          subject: 'Demo',
        },
        {
          action: 'read',
          subject: 'Public',
        },
      ],
    },
  ],
}

// ! These two secrets shall be in .env file and not in any other file
const jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
}

mock.onPost('/auth/login').reply(request => {
  const { email, password } = JSON.parse(request.data)

  let error = {
    email: ['Something went wrong'],
  }

  const user = data.users.find(u => u.email === email && u.password === password)

  if (user) {
    try {
      const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret)
      const response = {
        accessToken,
      }

      return [200, response]
    } catch (e) {
      error = e
    }
  } else {
    error = {
      email: ['Email or Password is Invalid'],
    }
  }

  return [400, { error }]
})

mock.onPost('/auth/register').reply(request => {
  const { username, email, password } = JSON.parse(request.data)

  // If not any of data is missing return 400
  if (!(username && email && password)) return [400]

  const isEmailAlreadyInUse = data.users.find(user => user.email === email)
  const isUsernameAlreadyInUse = data.users.find(user => user.username === username)

  const error = {
    password: !password ? ['Please enter password'] : null,
    email: (() => {
      if (!email) return ['Please enter your email.']
      if (isEmailAlreadyInUse) return ['This email is already in use.']

      return null
    })(),
    username: (() => {
      if (!username) return ['Please enter your username.']
      if (isUsernameAlreadyInUse) return ['This username is already in use.']

      return null
    })(),
  }

  if (!error.username && !error.email) {
    const userData = {
      email,
      password,
      username,
      fullName: '',
      avatar: null,
      role: 'admin',
      ability: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
    }

    // Add user id
    const { length } = data.users
    let lastIndex = 0
    if (length) {
      lastIndex = data.users[length - 1].id
    }
    userData.id = lastIndex + 1

    data.users.push(userData)

    const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret)

    return [200, { accessToken }]
  }

  return [400, { error }]
})

mock.onGet('/auth/me').reply(config => {
  const token = config.headers.Authorization.split(' ')[1]

  // get the decoded payload and header
  const decoded = jwt.decode(token, { complete: true })
  const { id: userId } = decoded.payload

  const user = JSON.parse(JSON.stringify(data.users.find(u => u.id === userId)))

  delete user.password

  return [200, { user }]
})
