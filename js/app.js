
'use strict';

console.log('sup dawg, why you lookin in the console');

startGame();

function startGame(){
  var userName;
  userName =prompt('What shall we call you today?');
  
  console.log('user name is ' + userName);
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
}

function questionOne(){
  alert('We have some yes or no queries for you today.');

  var questionOne = prompt('Do I have magical powers?');
  var answerOne = questionOne.toUpperCase().trim();

  console.log(answerOne);

  if(answerOne === 'YES' || answerOne === 'Y') {
    alert('Yes, I think that musical powers qualify as magical powers.');
  } else if(answerOne === 'NO' || answerOne === 'N') {
    alert('Well that\'s just like... your opinion... man.');
  } else { 
    alert('Yes or no please.');
  }
}

function questionTwo() {
  var questionTwo = prompt('Do I drive a van?');
  var answerTwo = questionTwo.toUpperCase().trim();
  console.log(answerTwo);

  if(answerTwo === 'YES' || answerTwo === 'Y') {
    alert('Actually, I do drive a van.. her name is Evangeline. ');
  } else if(answerTwo === 'NO' || answerTwo === 'N') {
    alert('You are very wrong.');
  } else {
    alert('Yes or no answers will be the only answers here.');
  }
}


function questionThree() {
  var questionThree = prompt('Is my favorite color blue?');
  var answerThree = questionThree.toUpperCase().trim();
  console.log(answerThree);

  if(answerThree === 'YES' || answerThree === 'Y') {
    alert('I do not have a favorite color.');
  } else if(answerThree === 'NO' || answerThree === 'N') {
    alert('I do not have a favorite color.. so technically you are correct.');
  } else {
    alert('Yes or no please.');
  }
}

function questionFour() {
  var questionFour = prompt('Do I sometimes go by the name Zebra Face 3000?');
  var answerFour = questionFour.toUpperCase().trim();
  console.log(answerFour);

  if(answerFour === 'YES' || answerFour === 'Y') {
    alert('Of course not, that is ridiculous.');
  } else if(answerFour === 'NO' || answerFour === 'N') {
    alert('Yes, that is actually my birth name.');
    alert('Just kidding!')
  } else {
    alert('Did you forget about the yes or no protocol?');
  }
}

function questionFive() {
  var questionFive = prompt('Have I always thought ninjas were cooler than pirates?');
  var answerFive = questionFive.toUpperCase().trim();
  console.log(answerFive);

  if(answerFive === 'YES' || answerFive === 'Y') {
    alert('You are absolutely right, ninjas are better than pirates.');
  } else if(answerFive === 'NO' || answerFive === 'N') {
    alert('I have always thought ninjas are better than pirates.');
  } else {
    alert('Yes or no only please.');
  }
}