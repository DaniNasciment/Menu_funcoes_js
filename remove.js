const prompt = require('prompt-sync')();
const showList = require ('./show');

function removeFromList(list) { //precisa da lista
    showList(list);
    const positionString = prompt(`Qual elemento deseja remover?`);
    const position = Number(positionString) -1;
    //splice - remove um elemento do meio, sem bagunçar do vetor. Reordena o vetor dps 
    //(qual posição, qnts elementos)
    list.splice(position,1); 
}
module.exports = removeFromList;
