# Developer Setup

- Having the [nix-shell installed](https://developer.holochain.org/docs/install/#install-the-nix-package-manager).
  - Note that you don't have to execute `nix-shell https://holochain.love` as we are going to be building on a custom version of holochain.
- Enter the nix-shell on this folder with:

```bash
nix-shell .
```

This will take a long time the first time you do it. To verify you have `holochain` and `hc` correctly installed:

```bash
holochain --version
```

Should give something like:

```bash
holochain 0.0.104
```

Then cd into the holochain directory and ``` npm install ``` then ``` yarn start ``` this will build and package the happ and then start the electron app. You can then run a seaparate conductor for the pico grid with ``` yarn start:picogridhapp ```. 