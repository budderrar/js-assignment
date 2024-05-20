var quotes = [
    {quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde"},
    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", source: "Albert Einstein"},
    {quote: "So many books, so little time", source: "Frank Zappa"},
    {quote: "A room without books is like a body without a soul.", source: "Marcus Tullius Cicero"},
    {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", source: "Bernard M. Baruch"},
    {quote: "You only live once, but if you do it right, once is enough.", source: "Mae West"},
];


var originalQuotes = quotes.slice();

document.getElementById('quote-button').onclick = function(){

    if (quotes.length === 0) {
        
        quotes = originalQuotes.slice();
    }
    
    var index = Math.floor(Math.random() * quotes.length);

    var quote = quotes[index];

    quotes.splice(index, 1);
    
    document.getElementById('quote').innerHTML = quote.quote;
    document.getElementById('source').innerHTML = quote.source;
};

