var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"

$(document).ready(function() {
  function getQuote(jsonReturn) {
    if ((jsonReturn !== null) && ((jsonReturn.quoteAuthor !== "") || (jsonReturn.quoteAuthor !== ""))) {
      $(".quote-text").text(jsonReturn.quoteText);
      $(".random-quote-author").text(jsonReturn.quoteAuthor);
    } else {
      $('.random-quote-text').html("No such quote's ");
    }
  }

  $(".random-quote-button").on('click', function () {
    $.getJSON(url, getQuote, 'jsonp');
  });

  $.getJSON(url, getQuote, 'jsonp');
});
