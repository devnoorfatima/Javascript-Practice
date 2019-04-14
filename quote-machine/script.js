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
      $('#quote-title').html('"' + quote.quoteText + '"')
      $('#quote-content').html("-"+quote.quoteAuthor);
    }
  });
}
getQuote();

$('#btn').click(function(){
getQuote()
});