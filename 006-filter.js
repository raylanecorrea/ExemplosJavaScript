//FILTER  (retrieve & search ) 
const arrayStrings = ["Azul", "Amarelo", "Vermelho", "verde"]
const arrayObjetos = [{id:01, nome: "Jane", estado: 'Town' },
                    {id:02, nome: "Jane", estado: 'Town' },
                    {id:03, nome: "Jane", estado: 'Town' },
                    {id:04,  nome: "Jane", estado: 'Town' }]
//filtrando cores que nao sao "Vermelho"
const arrayCoresFiltradas = arrayStrings.filter(cores => {
   return cores != "Vermelho"
})

const arrayFiltradas = arrayStrings.filter(filtro => {
    return filtro === "Azul"
 })


console.log(arrayFiltradas)
console.log(arrayCoresFiltradas)


//**FIND** assim que encontra ja para a execuçao nao retorna todos os itens de mesmo valor

const itens = ["garrafa", "colher", "prato", "faca", "prato", "lenco", "copo"]

const encontrePrato = itens.find(encontre => {
    return encontre === "prato"
})

console.log(encontrePrato)


//***INCLUDES*** verifica se o valor existe no array e retorna TRUE ou FALSE
//tem prato? TRUE
console.log(itens.includes("prato"))
//tem sapato? FALSE
console.log(itens.includes("sapato"))
//encontrar prato a partir do indice posiçao 5 do array  FALSE
console.log(itens.includes("prato", 5))
//encontrar prato a partir da posicao 2 TRUE
console.log(itens.includes("prato", 2))
