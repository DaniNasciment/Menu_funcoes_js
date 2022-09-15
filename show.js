function showList(list) {
    console.log(' --- Listagem completa dos itens ---');
    for (let i=0; i< list.length; i++) { //utilizou o tamanho do vetor em si
        console.log(`${i + 1} - ${list[i]}`);
    }
}

module.exports = showList;