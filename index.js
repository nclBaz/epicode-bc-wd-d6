// ******************************************** ARRAYS **********************************************

// const fellowship = ["Frodo", "Sam", "Gimli", "Legolas", "Boromir", "Gandalf"]
// console.log(fellowship)

// Accessing elements
// const frodo = fellowship[0]
// const lastElement = fellowship[fellowship.length - 1]
// console.log(frodo)
// console.log(lastElement)
// console.log(fellowship[1])
// console.log(fellowship[1000])

// fellowship[0] = "Bilbo" // Sovrascrivo il primo elemento

// fellowship.push("Gandalf the White")
// console.log(fellowship.length)
// const gandalfTheWhite = fellowship.pop()
// console.log(fellowship.length)

// ******************************************** CONDITIONALS **********************************************

// if (fellowship[0] === "Frodo") console.log("L'elemento si chiama Frodo")
// else console.log("Non si chiama Frodo")

// if (fellowship[fellowship.length - 1]) console.log("L'elemento è definito")
// else console.log("L'elemento non è definito")

// if (fellowship[0] === "Frodo") {
//   console.log("Il primo dell'array è Frodo!")
// } else if (fellowship[0] === "Bilbo") {
//   console.log("Il primo dell'array è Bilbo!")
// } else {
//   console.log("Il primo dell'array non è nè Frodo nè Bilbo!")
// }

// const species = "Orc"

// switch (species) {
//   case "Hobbit":
//     console.log("Is a Hobbit")
//     break
//   case "Elf":
//     console.log("Is an Elf")
//     break
//   case "Human":
//     console.log("Is a Human")
//     break
//   case "Dwarf":
//     console.log("Is a Dwarf")
//     break
//   default:
//     console.log("None of the above!")
// }

// ******************************************** LOOPS **********************************************

// console.log(fellowship[0])
// console.log(fellowship[1])
// console.log(fellowship[2])
// console.log(fellowship[3])
// console.log(fellowship[4])
// console.log(fellowship[5])

// for (let i = 0; i < 1000; i++) {
//   console.log("Siamo nel loop!")
//   console.log(i)
// }

const fellowship = ["Frodo", "Sam", "Gimli", "Legolas", "Boromir", "Gandalf"]
console.log(fellowship)

// for (let index = 0; index < fellowship.length; index++) {
//   const currentElement = fellowship[index]
//   console.log(currentElement)
// }

// index -> 0, currentElement -> "Frodo"
// index -> 1, currentElement -> "Sam"
// index -> 2, currentElement -> "Gimli"
// index -> 3, currentElement -> "Legolas"
// index -> 4, currentElement -> "Boromir"
// index -> 5, currentElement -> "Gandalf"
// index -> 6, usciamo dal loop!

for (let index = 0; index <= fellowship.length; index++) {
  const currentElement = fellowship[index]
  console.log("Indice: " + index)
  console.log("Elemento Corrente: " + fellowship[index])
}

// index -> 0, currentElement -> "Frodo"
// index -> 1, currentElement -> "Sam"
// index -> 2, currentElement -> "Gimli"
// index -> 3, currentElement -> "Legolas"
// index -> 4, currentElement -> "Boromir"
// index -> 5, currentElement -> "Gandalf"
// index -> 6, currentElement -> undefined <----------------- OCCHIO!

// for (let index = 0; index < fellowship.length; index++) {
//   fellowship[index] = fellowship[index].toUpperCase()
// }

// console.log(fellowship)

let orcCount = 6

while (orcCount > 0) {
  // Il While PRIMA valuta la condizione POI esegue il codice
  console.log("An orc attacks!")
  orcCount = orcCount - 1 // Attenzione alla "clausola" di uscita dai loop! Altrimenti si rishcia di arrivare a loop infiniti!
}

// do { // Il Do-While PRIMA esegue il codice e POI valuta la condizione

// } while (condition)

// ******************************************** FOR & OBJECTS ARRAYS **********************************************
// const characters = [
//   {
//     name: "Frodo",
//     race: "Hobbit",
//     age: 10,
//   },
//   {
//     name: "Legolas",
//     race: "Elf",
//     age: 100,
//   },
//   {
//     name: "Gimli",
//     race: "Dwarf",
//     age: 60,
//   },
//   {
//     name: "Aragorn",
//     race: "Human",
//     age: 20,
//   },
// ]

// const races = []

// for (let index = 0; index < characters.length; index++) {
//   const character = characters[index]
//   races.push(character.race)
// }

// console.log(races) // ['Hobbit', 'Elf', 'Dwarf', 'Human']

// const youngCharacters = []

// for (let index = 0; index < characters.length; index++) {
//   const character = characters[index]
//   if (character.age < 30) youngCharacters.push(character)
// }

// console.log(youngCharacters)
