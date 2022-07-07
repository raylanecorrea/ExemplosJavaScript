var linhas = 3
var colunas = 5



if (linhas%2 === 1 && colunas%2 ===1) {
var matriz = []
for (var i = 0; i <linhas; i++) { //interacao pelas linhas
     matriz[i] = []  //para cada linha é criado um vetor vazio
    for (var j = 0 ; j < colunas; j++) { //interação pelas colunas
        matriz[i][j] = ['X'] 
      }
  } 
  } else {
    console.log("Digite um valor impar!")
}

console.log(matriz)
console.log(matriz.length)

/* for (var i = 0 ; i <eixoX; i++){
    let array = [i]
    for (var j = 0 ; j<eixoY; j++) {
      array=['X']
    }
  } */