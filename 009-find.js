const itens = ["garrafa", "colher", "prato", "faca", "prato", "lenco", "copo"]

const encontrePrato = itens.find(encontre => {
    return encontre === "prato"
})

console.log(encontrePrato)