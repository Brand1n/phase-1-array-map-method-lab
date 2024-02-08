const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//How can we "iterate" through individual words in a string? 
//Can we execute an iteration inside an iteration? How?
//How can we capitalize just the first letter in a word? .charAt(0) to target a single letter then Uppercase then slice(1)

function titleCased(){
  return tutorials.map(function(tutorial){
    const words = tutorial.split(' ')
    const letterCased = words.map(function(word){
      return word.charAt(0).toUpperCase()+ word.slice(1)
    })
    return letterCased.join(' ')

  })
}

    