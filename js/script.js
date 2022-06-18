/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  console.log(randomNumber);
}
getRandomQuote(quotes);

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);