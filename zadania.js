//zadanie 1

let hello = 'Hello';
let world = 'World';
let newString = `${hello} ${world}`;
console.log(newString);

//zadanie 2

const multiply = (x, y = 1) => x * y;
console.log(multiply(2)) // zwraca 2, czyli 2 * 1
console.log(multiply(2, 5)); //zwraca 10

//zadanie 3

function average(...numbers) {
	
	return (numbers.reduce((prev, current) => prev + current))/numbers.length
	
	
}
console.log(average(2,4,8,5)) //zwróci średnią, czyli 4.75
console.log(average(5)) //zwróci 5
console.log(average(100, 1000)) // zwróci 550

//zadanie 4

function average2(x, y) {
	
	return (grades.reduce((prev, current) => prev + current))/grades.length
	
	
}
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average2(...grades)) //zwróci średnią, czyli 3.22222222222


var average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

average( grades );


// Zadanie 5


const names = [1,4, 'Iwona', false, 'Nowak'];
const [ , , third, , fifth] = names

const firstName = third;
const lastName = fifth;
console.log(firstName); //wyświetli Iwona
console.log(fifth) // wyświetli Nowak





