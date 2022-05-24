
/*
---------------
problem solve-1:
-----------------
Convert Age to Days
Create a function that takes the age in years and returns the age in days.

Examples
calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300
Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.
*/
const calcAge = age => {
    return age * 365;
}



/*
---------------
problem solve-2:
-----------------
Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and returns their sum.

Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/


const addition = (x, y) => {
    const result = x + y;
    return result;
}

console.log(addition(3, 2));


/*
---------------
problem solve-3:
-----------------
Buggy Code (Part 1)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
cubes(3) ➞ 27

cubes(5) ➞ 125

cubes(10) ➞ 1000
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard.
*/

const cubes = (a) => {
    return a * a * a;
}

console.log(cubes(3));

/*
---------------
problem solve-4:
-----------------
Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.

Examples
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"
Notes
Assume an input is given.
*/

const giveMeSomething = (a) => {
    return "something " + a;
}

console.log(giveMeSomething('beeter than nothing'));