/**
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
**/

let countries = ["Pakistan", "America", "Brazil", "Italy"]

console.log("List Of Countries");

for (let i = 1; i < countries.length + 1; i++) {
    console.log(i + ": " + countries[i]);
}