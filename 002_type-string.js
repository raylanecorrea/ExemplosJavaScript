// tipo string (texto)

const texto1 = "Olá mundo";
const texto2 = 'olá mundo';
const senha = "senha@segura!";
const string_numeros = '123456';

console.log(texto1)

const frase = "Meu nome é ";
const nome1 = " Raylane";
const nome2 = " Jhennyfer";
//caracteres unicode  https://en.wikipedia.org/wiki/List_of_Unicode_characters
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'


console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
//concatenação
console.log(texto1 + nome1 + nome2)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// to lowercase colocar caracteres em caixa baixa
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//quantidade de caracteres 
const senha2 = "minhaSenha123"
console.log(senha.length) // 13 caracteres