//Booleanos retornam verdadeiro ou falso
//servem para comparar tipos de valores -- autenticações em formulários
//pode assumir valores de variaveis

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = 5;

//comparar numeros (===) resultando em true ou false

console.log(" 5 é igual a 10? ", primeiroNumero === segundoNumero)
console.log(" 5 é igual a 5? ", primeiroNumero === terceiroNumero)

// comparação entre duas strings

const texto1 = "alura";
const texto2 = "a";
const texto3 = "Alura";

console.log(" 'alura' é igual 'a' ? ", texto1 === texto2)
console.log(" 'alura' é igual a 'Alura'? ", texto1 === texto3)


const transformaTexto3 = texto3.toLowerCase()

console.log(" 'alura' é igual a 'alura' ?", texto1 === transformaTexto3)
