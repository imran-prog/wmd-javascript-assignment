/**
 * Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */

const carInformation = (manufacturer, model, ...information) => {
  let lastObject = Object.assign(information[0], information[1]);
  return {
    Manufacturer: manufacturer,
    "Model Number": model,
    ...lastObject,
  };
};

console.log(
  carInformation("BMW", "Model X", { Color: "Red" }, { Rims: "Steel" })
);
