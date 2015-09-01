
Example project with React.js, TypeScript and Webpack
=====================================================

TypeScript 1.6 is still in beta but it has JSX support so we are using it.

It's tempting to use React.js 0.14 (which is also in beta)
but type definitions only for 0.13 are available
on [TSD](http://definitelytyped.org/tsd/) for now.


Features
--------

  - [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
  - [Sass](http://sass-lang.com)
  - [Bourbon](http://bourbon.io)
  - [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
  - TODO: hot reload
  - TODO: static resources (fonts/images)
  - non-inline styles
  - source maps for ts and sass
  - TODO: tslint, sass lint

Prerequisites
-------------

  - `npm install -g typescript@next`
  - `npm install -g tsd`
  - `npm install -g webpack`
  - `npm install -g webpack-dev-server`

Installation
-----------

  - `npm install` — fetch dependencies from npm
  - `tsd update` — install type definitions for React.js
  - `npm run buld` — build project into `./dist`
    + it runs `webpack -p` under the hood
  - `npm run dev` — run development server on localhost:8080
    + `webpack-dev-server --content-base dist`
