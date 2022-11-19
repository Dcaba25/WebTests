/// variabile
/// var, let, const

var myName;
let secondName = "Bogdan";
const age = 30;

/// tipuri de date
/// date primitive si obiecte

let boolean = false;
console.log(typeof(boolean))

let n = null;
console.log(typeof(n))

let undf = undefined;
console.log(typeof(undf))

let num = 123;
console.log(typeof(num))

let str = "sdhfsyb"
console.log(typeof(str))

let person = {
    age:20,
    name:"David"
}
console.log(person)

let person2 = {
    age: 30,
    name:"Mihai"
}

//array / siruri

 const hobbies = ["Reading", "Biking", "Swimming"]
 console.log(hobbies)

const prices = [12.5, 13.3, 25.7, 30.1]
console.log(prices)

const Biking = prices[3]

const persons = [person, person2]
console.log(persons);

const people = [{id: 1, age: 35, email: "person@gmail.com"},
    {id: 2, age: 35, email:"anotherpeson@gmail.com"}]
console.log(people)

/// operatori
/// 1. Aritmetici +, -, /, *, ++, --
const sum = 1 + 1
console.log(sum)

const difference = 2 - 1
console.log(difference)

const division = 10 / 5
console.log(division)

let multiplication = 10 * 5
console.log(multiplication)

multiplication++
console.log(multiplication)

multiplication--
console.log(multiplication)

/// 2. logici &&, ||, !
// ! - negatie

/// 3. comparatie ==, !=, ===, !==, >=, <=, <, >

const number1 = 12
const number2 = 10
console.log(number1 == number2)
console.log(number1 != number2)

const myNumber = "12"
console.log(number1 === myNumber) /// !==
console.log(number1 <=number2) /// >=, <, >

/// 4.de atribuire =, +=, /=, *=, -=

const Myname = "Bogdan"
let nrmeu = 20
console.log("nrmeu: " + nrmeu)
nrmeu +=5
console.log("nremeu: " + nrmeu)
nrmeu -=5
console.log("nremeu: " + nrmeu)
nrmeu /=5
console.log("nremeu: " + nrmeu)
nrmeu *=5
console.log("nremeu: " + nrmeu)

///control flow

const age2 = 15;
///if/else
if(age2 < 18){
    console.log("You are under aged.")
}else{
    console.log("You are an adult")
}

///for loop
const persoana= ["Bogdan", "Mihai", "Andreea", "Ovidiu"]
for(i=persoana.length; i>=0; i--){
    console.log(persoana[i])
}

///while
let numar = 5
//while(numar <= 10){
//    console.log(numar)
//    numar++
//}

/// do while
//do{
//   console.log(numar)
//    numar++
//}while(numar<=10)

///switch
switch(numar){
    case 1:
        console.log("Numar este 1")
        break
    case 2:
        console.log("numar este 2")
        break
    default:
        console.log("numar este defapt " + numar)
}

///tratarea erorilor
try{
    if(numar2 === 1){
        console.log("number are valoarea 1")
    }
}catch(error){
    console.log("Something happened: " + error.message)
}finally{
    console.log("Finally a fost executat")
}

///functii
function displayPersonDetails(Name, ani, email2){
    console.log("My name is: " + Name)
    console.log("My age is: " + ani)
    console.log("My email adress is: " + email2)
}
displayPersonDetails("Mihai", 20, "test@gmail.com")

///clase si obiecte
class pers{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
     }
    calculateAge(){
        return new Date().getFullYear() - this.dateOfBirth.getFullYear()
    }
}
var p = new pers("Mihai", "Popescu", new Date("11-11-1986"))
console.log(p.calculateAge())


///Manipulare DOM
var query = document.getElementsByClassName("page-titlu")
console.log(query)