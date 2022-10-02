/**
 * More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
 • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

 • Add one new guest to the beginning of your array.

 • Add one new guest to the middle of your array. 
 
 • Use append() to add one new guest to the end of your list. 
 
 • Print a new set of invitation messages, one for each person in your list.
 */

let peopleToInvite = ["Gallelio", "Johnny Depp", "Quaid-e-Azam"];

console.log("I just found a bigger table");

peopleToInvite.unshift("Einstien")
peopleToInvite.push("Marie Curie")
peopleToInvite.splice(peopleToInvite.length / 2, 0, "Stephen hawking")

peopleToInvite.forEach((name) => {
    console.log(
      `Hy ${name}, I really love what you have done in your life and Want to ask you few questions about it. Will you join me on a dinner tonight.`
    );
  });