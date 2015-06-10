# generator-react-kayak

> Helping you learn React development, forwards and backwards.

## Features
- [Yeoman](http://yeoman.io/) generator to create a single-page-app architecture, using [React](https://facebook.github.io/react/)
  - Isomorphic option, with React being rendered by a [Koa](http://koajs.com/) server, coming soon™.
- Implements uni-directional data flow architecture via [Reflux](https://github.com/spoike/refluxjs) framework
  - Options for [Vanilla Flux](https://facebook.github.io/flux/), [Fluxible](http://fluxible.io/), and [NuclearJS](https://github.com/optimizely/nuclear-js) coming soon™
- Full routing functionality via [React Router](https://github.com/rackt/react-router)
- Examples of `<View />` and other custom components, and data-fetching through an external API, along with working [Jest](https://facebook.github.io/jest/) test suite
- Includes [Materialize](http://materializecss.com/) style framework, along with [Material-UI](http://material-ui.com/) components
  - Options for [Bootstrap](http://getbootstrap.com/) (with [React Bootstrap](http://react-bootstrap.github.io/)), [Semantic-UI](http://semantic-ui.com/) (no components), coming soon™
- ES2015 development environment, with hot-module-reload and React state preservation using [Webpack](http://webpack.github.io/docs/webpack-dev-server.html), [React Hot Loader](https://gaearon.github.io/react-hot-loader/), and [Babel](https://babeljs.io/)

## Goals

## Dependencies
- [Node/NPM](https://nodejs.org/)
  - NOTE: Currently, Jest testing framework only works on Node v0.10.x. If you are not using this version of Node, you can use [Node Version Manager(NVM)](https://github.com/creationix/nvm) to install. Follow [this issue](https://github.com/facebook/jest/issues/243) for progress.
- [Yeoman](http://yeoman.io/) - `npm install -g yo`
- [Gulp](http://gulpjs.com/) - `npm install -g gulp`

## Get Started
- Install `generator-react-app`:
  - `npm install -g generator-react-kayak`
- Create your application folder:
  - `mkdir ~/Projects/MyApp && cd ~/Projects/MyApp`
- Generate your React App
  - `yo react-kayak`
- `npm start` and enjoy!

## Sub-generators
### View
### Component
### Action
### Store
### Mixin

## Additional commands
- `npm test` - Run Jest test suite
- `gulp build` - Create distribution bundle in `/dist` (If gulp not installed, `npm install -g gulp`
- `gulp preview` - Create a server running the distribution bundle`

## Contributing
