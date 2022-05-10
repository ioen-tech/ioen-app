let
  holonixPath = (import ./nix/sources.nix).holonix; # points to the current state of the Holochain repository
  holonix = import (holonixPath) {
    holochainVersionId = "v0_0_137"; # specifies the Holochain version
  };
  nixpkgs = holonix.pkgs;
in nixpkgs.mkShell {
  inputsFrom = [ holonix.main ];
  packages = with nixpkgs; [
    niv
    nodejs-16_x
    # any additional packages needed for this project, e. g. Nodejs
  ];
}

# git ls-remote https://github.com/holochain/holonix main | grep -oE '[0-9a-z]{40}'