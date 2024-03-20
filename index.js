// Code your solutions in this file
const thankyous = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(thankyous) {
    return thankyous.map(thankyous => `Thank you, ${thankyous}, for the wonderful surprise gift!`)
} // .map calls back to the elements in the array

const countDown = (number) => {
    console.log(number);
    if (number === 0) {
      return; //returns back to the call stack, no # is returned
    } 
    else {
      countDown(number - 1); // keeps counting back until it reaches 0
    }
  }
countDown();