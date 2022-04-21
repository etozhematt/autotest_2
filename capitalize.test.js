import capitalize from "../src/capitalize.js";
import assert from 'assert/strict';

assert(capitalize("") === "");
assert(capitalize("hello") === "Hello");

assert.equal(capitalize(""), "");
assert.equal(capitalize("hello"), "Hello");

console.log("Все тесты пройдены!");
