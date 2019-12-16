'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var React = require("react");
var JestDom = require("bs-jest-dom/src/JestDom.bs.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.bs.js");
var Main$ReasonReactExamples = require("../src/Main.bs.js");

Jest.describe("Main", (function (param) {
        return Jest.test("should have hello world text", (function (param) {
                      var partial_arg = /* `Str */[
                        4153489,
                        "Hello, World!!"
                      ];
                      return JestDom.toBeVisible(Jest.Expect.expect((function (eta) {
                                          var param = undefined;
                                          var param$1 = eta;
                                          return ReactTestingLibrary.getByText(partial_arg, param, param$1);
                                        })((function (eta) {
                                              return ReactTestingLibrary.render(undefined, undefined, eta);
                                            })(React.createElement(Main$ReasonReactExamples.make, { })))));
                    }));
      }));

/*  Not a pure module */
