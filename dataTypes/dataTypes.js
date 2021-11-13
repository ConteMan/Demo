/**
 * string
 */
var enName = 'Bob';
var age = 18;
var info = "Hello, my name is " + enName + ", I'm " + (age + 1) + " years old.";
console.log(info);
/**
 * void
 */
function showName() {
    alert('My name is Bob');
}
/**
 * Union Types
 */
function getString(something) {
    return something.toString();
}
var tom = {
    id: 111,
    name: 'Tome',
    gender: 'male'
};
console.log(tom);
