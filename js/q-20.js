/**
 * They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
 */

const carData = new Object()

const addCarCata = (array) => {
  array.forEach((element, index) => {
    carData[index] = element
  });
}

addCarCata(["Red", "2002", "sedan"])

console.log(carData);
