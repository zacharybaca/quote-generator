/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 This is an array of objects that were hard-coded with selected quotes that I had picked from the Internet
***/

let quotes = [

  {
    quote: 'Believe you can and you are halfway there.',
    source: 'Theodore Roosevelt',
    citation: '',
    year: ''
  },

  {
    quote: 'All our dreams can come true, if we have the courage to pursue them.',
    source: 'Walt Disney',
    citation: '',
    year: ''
  },

  {
    quote: 'Love your Enemies, for they tell you your Faults.',
    source: 'Benjamin Franklin',
    citation: 'Poor Richard\s Almanack',
    year: '1756'
  },

  {
    quote: 'A true Friend is the best Possession',
    source: 'Benjamin Franklin',
    citation: 'Poor Richard\s Almanack',
    year: '1744'
  },

  {
    quote: 'The only thing that interferes with my learning is my education.',
    source: 'Albert Einstein',
    citation: '',
    year: ''
  }
];



/***
 This function generates a random number, then uses that random number to select an index in the quote array
***/
function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  let quote = arr[randomNumber];
  return quote;
}


/***
 This function prints the random quote to the DOM using if statements depending on if the quote has a citation and/or year
***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }
 if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);