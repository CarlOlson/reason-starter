'use strict';


function Main(Props) {
  return "Hello, World!";
}

var make = Main;

exports.make = make;
/* No side effect */
