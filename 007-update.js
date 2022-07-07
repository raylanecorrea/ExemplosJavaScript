
//SPREAD
//atualizar e remover  (retornam um novo array)
let names = ["Jonh", "Jane"]
console.log(names)

names = [...names, "Joe", "Hayley"]

console.log(names)
//criar um novo array de nomes

const newNames =[...names, "Dart", "Yoda"]

console.log(newNames)

//SLICE remove 

//retira o primeiro do array
console.log(newNames.splice(1,2))

/* //retira o ultimo do array
console.log(names.slice(0, -1))

//dois ultimos
console.log(names.slice(0, -2))
 */



