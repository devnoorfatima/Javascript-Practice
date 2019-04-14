function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    },
    success: function(quote) {
      $('#quote-title').html('&ldquo;'+quote.quoteText+'&rdquo;')
      $('#quote-content').html("-"+quote.quoteAuthor);
    }
  });
}
getQuote();
