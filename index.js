//Create a function that takes two numbers as arguments and returns their sum
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(7, 9));

//Write a function that takes the base and height of a triangle and return its area
function area(base, height){
    return (base * height) / 2;
}

console.log(area(3, 4));
console.log(area(5, 6));

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function string(a) {
    console.log(`something ${a}`);
}

string("JavaScript");
string("React");