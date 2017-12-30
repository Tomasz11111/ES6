//zadanie 1

let hello = 'Hello';
let world = 'World';

console.log(`${hello} ${world}`);

//zadanie 2

const multiply =(x, y = 1) => x * y;
console.log(multiply(2)) // zwraca 2, czyli 2 * 1
console.log(multiply(2, 5)); //zwraca 10

//zadanie 3

const average = (...numbers) => numbers.reduce((prev, current) => prev + current)/numbers.length;
	
console.log(average(2,4,8,5)) //zwróci średnią, czyli 4.75
console.log(average(5)) //zwróci 5
console.log(average(100, 1000)) // zwróci 550

//zadanie 4


const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(...grades)) //wyświetlni średnią, czyli 3.22222222222


// Zadanie 5


const names = [1,4, 'Iwona', false, 'Nowak'];
const [ , , firstName , ,lastName] = names

console.log(firstName); //wyświetli Iwona
console.log(lastName) // wyświetli Nowak





