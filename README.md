# Create-React-Component

### A barebones minimal repository to create your own React Components to release on `npm`.

## How to use

* Fork this repo
* When creating a new project on **Github**, select this repository as a "Template Repository" to use.
* Create the new repo and clone it to your machine
* Start editing `src/index.js` to create your next awesome component!
* **IMPORTANT** - remember to change the name of the `name` field in `package.json` - unless you want your module to be called `create-react-component` which is already taken 😔

### Testing your changes

This template repo is intended for **just the module/component alone**. If you'd like to test out your component, do this in another React project (like a [`create-react-app`](https://github.com/facebook/create-react-app) project):

**IMPORTANT** - remember to change the name of the `name` field in `package.json`. For the purposes of this guide, let's pretend you changed the name to: `awesome-react-component`.

* Make sure you've run the build before you start with `npm run build`. Alternatively, you can run `npm run dev` and it will build whenever you make changes to your source file(s).
* In this project on the CLI, run `npm link`
* In your other React project, run `npm link awesome-react-component`
* In the other React project, try to import the component like this:

```js
import AwesomeReactComponent from 'awesome-react-component';
```

Then try to render it
```js
render() {
   /* ... */
  return (
    <div>
      <AwesomeReactComponent />
    </div>
  );
}
```

Check your other project and you should see your component rendering! Now get to work!

### NPM scripts

* `npm run build` - Builds the component minified in production mode.
  * Run this command before you use `npm publish` to publish your awesome component!
* `npm run dev` - Builds the component whenever a file change is detected. This builds the component in **development** mode for debugging purposes.

### How to ship

Is your awesome component ready for publishing? Let's get it live on `npm`!

#### Shipping for the first time
* Run `npm run build` to build your component in production mode with all the optimizations.
* Make sure your `package.json` has the right `version` number.
* Create a tag for the version: `0.1.0`, `v1.0.0` etc
  * `git tag 0.1.0`
* Make sure you have an `npm` account and are logged in. If you aren't, run `npm login`.
* Run `npm publish`
* Congrats! You have officially shipped!

#### Shipping for the nth time
* Commit your changes
* Determine what version you want for this (major, minor, or patch). Then run `npm version [major|minor|patch]` - this will automatically bump the version number in your `package.json` and create a new git tag.
* Run `npm publish`
* Congrats! you have officially shipped for the nth time!

Created with <3 by MrBenJ
