
require('file?name=index.html!./index.html');

var React = require('react')
var App = require('./ts/app.tsx');

React.render(
    React.createElement(App),
    document.body
);
