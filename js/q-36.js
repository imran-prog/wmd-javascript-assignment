/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */

const makeShirt = (size = "large", message = "I love Javascript") => {
  if (size == "large" || size == "medium") {
    console.log(
      "The shirt size is " + size + " and the message to print on is " + message
    );
  } else {
    console.log(
      "The shirt size is " + size + " and the message to print on is " + message
    );
  }
};

makeShirt();
makeShirt("medium");
makeShirt("small", "Check My Worth");
