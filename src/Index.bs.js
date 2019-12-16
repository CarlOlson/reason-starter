'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Main$ReasonReactExamples = require("./Main.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(Main$ReasonReactExamples.make, { }), "main");

/*  Not a pure module */
