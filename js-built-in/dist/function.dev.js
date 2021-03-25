"use strict";

function say(a, b, c) {
  console.log(arguments.length); //2

  console.log(arguments[0], arguments[1]); //hello world
}

say('hello', 'world');