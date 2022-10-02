/**
 * Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

  * Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

  * Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

  * Print a second set of invitation messages, one for each person who is still in your list.
 */

let peopleToInvite = ["Nicola Tesla", "Johnny Depp", "Quaid-e-Azam"];

console.log("\nNicola Tesla could ot make at he dinner\n");

peopleToInvite[peopleToInvite.indexOf("Nicola Tesla")] = "Gallelio";

peopleToInvite.forEach((name) => {
  console.log(
    `Hy ${name}, I really love what you have done in your life and Want to ask you few questions about it. Will you join me on a dinner tonight.`
  );
});
