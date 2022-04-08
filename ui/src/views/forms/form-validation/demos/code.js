/* eslint-disable no-useless-escape */

export const formValidationSimple = `
<template>
  <v-form ref="form">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="firstName"
          label="First Name"
          outlined
          dense
          hide-details="auto"
          :rules="[required]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          label="Email"
          outlined
          hide-details="auto"
          :rules="[required,emailValidator]"
          dense
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-btn
          color="primary"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'
import { required, emailValidator } from '@core/utils/validation'

export default {
  setup() {
    const firstName = ref('')
    const email = ref('')
    const form = ref(null)
    const validate = () => {
      form.value.validate()
    }

    return {
      firstName,
      email,
      validate,
      form,

      // validation rules
      required,
      emailValidator,
    }
  },
}
</script>
`

export const formValidationMultipleRules = `
<template>
  <v-form ref="form">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="name"
          outlined
          dense
          hide-details="auto"
          placeholder="Your Name"
          :rules="[required]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          outlined
          dense
          hide-details="auto"
          placeholder="Your Email"
          :rules="[required,emailValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="password"
          outlined
          dense
          hide-details="auto"
          type="password"
          placeholder="Your Password"
          :rules="[required,passwordValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="confirmPassword"
          outlined
          hide-details="auto"
          dense
          type="password"
          placeholder="Confirm Password"
          :rules="[required,confirmedValidator(confirmPassword,password)]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-btn
          color="primary"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { required, emailValidator, passwordValidator, confirmedValidator } from '@core/utils/validation'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const form = ref(null)
    const password = ref('')
    const confirmPassword = ref('')

    const validate = () => {
      form.value.validate()
    }

    return {
      form,
      validate,
      name,
      email,
      password,
      confirmPassword,

      // validation rules
      required,
      emailValidator,
      passwordValidator,
      confirmedValidator,
    }
  },
}
</script>
`

export const formValidationTypes = `
<template>
  <v-form ref="form">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="requiredField"
          placeholder="This field is required"
          outlined
          dense
          hide-details="auto"
          :rules="[required]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="numberBetween10to20"
          placeholder="Enter Number between 10 & 20"
          outlined
          dense
          hide-details="auto"
          :rules="[required,between(numberBetween10to20,10,20)]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyConsistNumber"
          placeholder="Must only consist of numbers"
          outlined
          dense
          hide-details="auto"
          :rules="[required,integerValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="matchRegularEx"
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          outlined
          hide-details="auto"
          dense
          :rules="[required,regexValidator(matchRegularEx,'^([0-9]+)$')]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyAlphabeticCharacters"
          placeholder="Only alphabetic characters"
          outlined
          hide-details="auto"
          dense
          :rules="[required,alphaValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="specifiedLength"
          placeholder="Length should not be less than the specified length : 3"
          outlined
          hide-details="auto"
          dense
          :rules="[required,lengthValidator(specifiedLength,3)]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="password"
          placeholder="Password Input Field"
          outlined
          hide-details="auto"
          type="password"
          :rules="[required,passwordValidator]"
          dense
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="digits"
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          outlined
          hide-details="auto"
          dense
          :rules="[required,lengthValidator(digits,3),integerValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="repeatePassword"
          placeholder="Repeat password must match"
          outlined
          hide-details="auto"
          dense
          type="password"
          :rules="[required,confirmedValidator(repeatePassword,password)]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          outlined
          hide-details="auto"
          dense
          :rules="[required,alphaDashValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          placeholder="Must be a valid email"
          outlined
          hide-details="auto"
          :rules="[required,emailValidator]"
          dense
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="validURL"
          placeholder="Must be a valid url"
          outlined
          hide-details="auto"
          dense
          :rules="[required,urlValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-btn
          color="primary"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  required,
  emailValidator,
  passwordValidator,
  between,
  integerValidator,
  regexValidator,
  alphaValidator,
  urlValidator,
  confirmedValidator,
  lengthValidator,
  alphaDashValidator,
} from '@core/utils/validation'

export default {
  setup() {
    const requiredField = ref('')
    const numberBetween10to20 = ref('')
    const onlyConsistNumber = ref('')
    const matchRegularEx = ref('')
    const onlyAlphabeticCharacters = ref('')
    const specifiedLength = ref('')
    const password = ref('')
    const digits = ref('')
    const repeatePassword = ref('')
    const onlyAlphabeticNumbersDashesUnderscores = ref('')
    const email = ref('')
    const validURL = ref('')
    const form = ref(null)

    const validate = () => {
      form.value.validate()
    }

    return {
      requiredField,
      numberBetween10to20,
      onlyConsistNumber,
      matchRegularEx,
      onlyAlphabeticCharacters,
      specifiedLength,
      password,
      digits,
      repeatePassword,
      onlyAlphabeticNumbersDashesUnderscores,
      email,
      validURL,
      validate,
      form,

      // validation
      required,
      emailValidator,
      passwordValidator,
      between,
      integerValidator,
      regexValidator,
      alphaValidator,
      urlValidator,
      confirmedValidator,
      lengthValidator,
      alphaDashValidator,
    }
  },
}
</script>
`
