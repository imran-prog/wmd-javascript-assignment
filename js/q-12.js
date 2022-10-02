/**
 * Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
 */

let modeOfTransportaion = ['plane', 'sportscar', 'bike']
let brandOfTransportaion = ["Boeing 700", "Mclaren", "BMW"]

for (let i = 0; i < modeOfTransportaion.length; i++) {
    console.log("I would love to own " + brandOfTransportaion[i] + " " + modeOfTransportaion[i] );
}