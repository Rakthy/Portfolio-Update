



//array of quotes with object properties//


const quotes = [
  {
    quote:"My fellow Americans, ask not what your country can do for you, ask what you can do for your country.",
    source: "John F. Kennedy",
    citation: "Inauguration Speech",
    year: "1961"
  },
  {
    quote: "The Only thing we have to fear, is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "Inauguration Speech",
    year: "1961"
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: "Guatama Buddha",
    citation: "Dharma",
    year: "500 B.C."
  },
  {
    quote:
      "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else, you are the one who gets burned.",
    source: "Guatama Buddha",
    citation: "The Dharma",
    year: "500 B.C."
  },

  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    citation: "Unknown",
    year: "1978"
  }
];

//random color Generator by RGB//

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = color;
}

//function to get random quotes from array//
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//appending the random quotes with object properties to the DOM//
function printQuote(quotes) {
  const randomQuote = getRandomQuote();
  const appendQuote = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  <span class="citation">${randomQuote.citation}
  </span><span class="year">${randomQuote.year}</span></p>`;

  const quoteBox = document.querySelector("#quote-box");
  quoteBox.innerHTML = appendQuote;
}

//SetInverval to change the quotes and background color every 20secs//

 setInterval (function () {
   printQuote();
   randomColor();
 }, 100000);

//Event listeners on click for button//
document
  .getElementById("loadQuote")
  .addEventListener("click", randomColor, false);
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
