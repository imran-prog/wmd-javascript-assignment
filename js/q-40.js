/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */

let magicians = ["larry", "Josh", "Mahem"];

const showMagicians = (array) => {
  array.map((name) => {
    console.log(name);
  });
};

showMagicians(magicians);
