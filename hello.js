const Quote = require("inspirational-quotes");

console.log(Quote.getQuote()); // returns
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: Quote.getQuote().text,
    e: "oO",
    T: "U ",
  })
);
