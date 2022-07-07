//ARRAYS SÃO LISTAS | COLEÇÃO DE DADOS (strings, numbers, objects...) 

const arrayStrings = ["Azul", "Amarelo", "Vermelho"]
const arrayObjetos = [{nome: "Maria", estado: 'Pará' },
                    {nome: 'José', estado: 'Bahia' }, 
                    {nome: 'Severino', estado: 'Acre'}, 
                    {nome: 'Comixão', estado: 'Maceio'}]
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayDeArray = [[1,2,3,4,5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]


console.log(arrayStrings.length);
console.log(arrayObjetos.length);
console.log(arrayNumeros.length);
console.log(arrayDeArray.length);

console.log(arrayStrings);
console.log(arrayObjetos);
console.log(arrayNumeros);
console.log(arrayDeArray);

arrayDeArray.forEach(function(arrayd){
    console.log(arrayd)
})
