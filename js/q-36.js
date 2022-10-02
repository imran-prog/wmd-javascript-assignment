/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */

const makeShirt = (size = "large", message) => {
  if (size == "large" || size == "medium") {
    console.log(
      "The shirt size is " +
        size +
        " an the message to print on is I love Javascript"
    );
  } else {
    console.log(
      "The shirt size is " + size + " an the message to print on is " + message
    );
  }
};

makeShirt("large", "No Pain No Gain");
