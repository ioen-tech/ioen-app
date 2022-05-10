# Setting up a RaspberryPi 4 to run Holochain

Holochain now builds and runs on ARM devices. The following is one way to do this.

## Steps
- Use the RaspberryPi Imager app to create a new SD card with Ubuntu Server 22.04 64 Bit version.
- Enable SSH and set your user and password.
- Set the WiFi settings as well.
- Write your SD and boot up your Pi.
- SSH into your new Pi image.
- Git is already installed
- Install rust ``` curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh ```
- Connect VS Code via SSH to your Pi so you can edit the profile. Add ``` PATH="$HOME/.cargo/bin:$PATH" ``` to the .profile
- Create a new ssh key and add it to your Github account
  - [SSH KeyGen](!https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - ```ssh-keygen -t rsa -b 4096 -C "philip.beadle@live.com.au"```
  - accept the defaults
  - then ```cat /home/ioen/.ssh/id_rsa.pub``` and copy the key to your github account.
- Create a folder for your projects ```mkdir projects```
- CD into it ```cd projects```
- Clone the Holochain repo ```git clone git@github.com:holochain/holochain.git```
- Install the lib-ssl libraries ```sudo apt install libssl-dev```
- logout of SSH and back in
- cd ~/projects/holochain
- Add the wasm target ```rustup target add wasm32-unknown-unknown```
- Install the build tools ```sudo apt install build-essential```
- Configure ```sudo apt install pkg-config```
- Compile Holochain ```cargo install --path crates/holochain```
