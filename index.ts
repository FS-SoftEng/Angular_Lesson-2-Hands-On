// Part 1 - Person Interface

interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
    }


class Entry implements Person {
    firstName: string;
    lastName: string; 
    birthday: Date;
    constructor(firstName: string, lastName: string, birthday: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}

const newPerson = new Entry('Albert', 'Einstein', new Date('05/14/1879'))

console.log('First Name: ' + newPerson.firstName + ', Last Name: ' + newPerson.lastName + ', Birthday: ' + newPerson.birthday);



// Part 2 - Number Sort Array

const numbers: Array<string> = [
    'twelve', 
    'one-hundred', 
    'sixteen', 
    'forty-four', 
    'seventy-three', 
    'three-million'
]; 
 
function sortArray <s> (array: s[]): s[] {
    return array.sort(); 
} 

console.log('Array before sorting: ' + numbers); 
console.log('Array after sorting: ' + sortArray(numbers)); 

