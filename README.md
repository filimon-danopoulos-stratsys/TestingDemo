Microfrontend Template
---

This is a microfrontend template you can use to create new microfrontends intended for use in the PDR microfrontend ecosystem.
To use the template create a new project from the template as per [these](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) instructions and then perform the following steps.

1. Clone your new repository.
1. Open `package.json` and change `my-mfe` in the `name` property to the desired name of your microfrontend, don't remove the `@stratsys/` scope.
1. Open `mfe.config.json` and change the `"name"` property from `"my-mfe"` to the same name you used in the previous step (without `@stratsys/`).
1. Open `dev/index.html` and change the custom element `<my-mfe></my-mfe>` to `<name></name>`.
1. Run `yarn install`
1. Open `scripts/init.sh` and change `my-mfe` in the value of `MFE_NAME` to the name of your microfrontend.
1. Add all changes, commit and push.
1. Create a new DevOps pipeline from the configuration provided.
1. ...
1. Profit!
1. (Update README)
