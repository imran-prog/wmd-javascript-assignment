/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */

let magicians = ["larry", "Josh", "Mahem"];

const makeGreat = (array) => {
    array.map((name) => {
    magicians[magicians.indexOf(name)] = "Great " + name;
  });
  console.log(array);
};

makeGreat(magicians);
