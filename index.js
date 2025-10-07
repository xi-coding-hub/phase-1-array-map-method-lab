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

const titleCased = () => {
  const tutorialsTitleCase = tutorials.map((title) => {
    const words = title.split(",") 
    const letters = words.map((word) => {
      return word.split("")
    }) 

    const capWords = letters.map((char, index) => {
      if (index === 0) {
        return char[0].toUpperCase()

      }else {
        return char
      }
    }).join("")
    return capWords
  }).join("")
  return tutorialsTitleCase
  
  }
  


