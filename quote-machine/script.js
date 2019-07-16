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
      $('#text').html('"' + quote.quoteText + '"')
      $('#author').html("-"+quote.quoteAuthor);
      if(quote.quoteAuthor==''){
        $('#author').html("-"+'Anonymous');
      }
    }
  });
}
getQuote();

$('#new-quote').click(function(){
getQuote()
});


