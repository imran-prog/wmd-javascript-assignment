/**
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
**/

let countries = []

const addCountry = (...list) => {
    countries.push(...list)
}

addCountry("Peru", "Russia", "Japan")

console.log(countries);