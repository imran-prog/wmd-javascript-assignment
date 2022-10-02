/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
 */

console.log('If "Imran" == "Imran"? I predict True');
console.log("Imran" == "Imran");

console.log('If "Imran" == "Akbar"? I predict false');
console.log("Imran" == "Akbar");

console.log('If 2 == 7? I predict false');
console.log(2 == 7);

console.log('If 90 == 90? I predict True');
console.log(90 == 90);

console.log('If 8 > 9? I predict false');
console.log(8 > 9);

console.log('If 33 < 76? I predict True');
console.log(33 < 76);

console.log('If 8 >= 9? I predict false');
console.log(8 >= 9);

console.log('If 33 <= 76? I predict True');
console.log(33 <= 76);

console.log('If 85 <= 85? I predict True');
console.log(85 <= 85);

console.log('If "Kaleem" == "Kaleem" && 90 > 12? I predict True');
console.log("Kaleem" == "Kaleem" && 90 > 12);

console.log('If "Kaleem" == "Kaleem" && 90 < 12? I predict False');
console.log("Kaleem" == "Kaleem" && 90 < 12);

console.log('If "Kaleem" == "Hurain" || 90 > 12? I predict True');
console.log("Kaleem" == "Hurain" || 90 > 12);

console.log('If "Kaleem" == "Hurain" || 90 < 12? I predict False');
console.log("Kaleem" == "Hurain" || 90 < 12);

console.log('If [88, 90, 12].includes(12)? I predict True');
console.log([88, 90, 12].includes(12));

console.log('If [88, 90, 12].includes(65)? I predict False');
console.log([88, 90, 12].includes(65));
