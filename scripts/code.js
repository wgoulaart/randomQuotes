// Random Quote Generator
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function (jsonReturn) {
  $(".quote-text").text(jsonReturn.quoteText);

  // check author quote
  if (jsonReturn.quoteAuthor === '') {
    jsonReturn.quoteAuthor = 'Unknown';
  }
  $(".random-quote-author").text(jsonReturn.quoteAuthor);

  // share-twitter
  var shareQuote = 'https://twitter.com/intent/tweet?text=' + jsonReturn.quoteText + ' - ' + jsonReturn.quoteAuthor + ' via @wgoulaart';
  $(".share-tt").attr("href", shareQuote);
};

$(document).ready(function () {
  $.getJSON(url, getQuote, 'jsonp');
});

$(".random-quote-button").on('click', function () {
  $.getJSON(url, getQuote, 'jsonp');
});
