// var randonQuoteText = document.querySelector(".randon-quote-text");
// var btnNewQuote = document.querySelector(".randon-quote-button");

// bind with js native
btnNewQuote.addEventListener("click", function(e) {
  randonQuoteText.innerHTML = quotesJson[Math.floor(Math.random() * 2)];
  e.preventDefault();
});

// select with jquery
$(document).ready(function() {
  var btnNewQuote = $('.randon-quote-button');
  console.log(btnNewQuote);
});
