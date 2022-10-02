/**
 * Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
 */

let userName = "imran akbar";

console.log(
  userName.toLowerCase() +
    "\n" +
    userName.toUpperCase() +
    "\n" +
    userName
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ")
);
