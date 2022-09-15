//arquivo central 
// interação com usuário 
// instalar o npm install prompt-sync

const prompt = require ('prompt-sync')();
const showMenu = require('./menu');  //MENU EXPORTADO AQUI 
const addToList = require('./add');  // caso 1 exportado aqui 
const showList = require('./show');
const removeFromList = require('./remove');

const list = [];
let option = 0;  //precisar ser let 

do {
    console.clear(); //limpar o console
    showMenu();  //utilizando a função direta
    option = Number(prompt(`>> `));

    console.clear();

    switch(option){
        case 1: 
        // adicionar a lista
        addToList(list); //utilizando o arquivo add
        break;
        case 2: 
        //mostrar a lista
        showList(list);
        break;
        case 3:
        //apagar a lista
        removeFromList(list);
        break;
        case 4: 
        //fechar a lista
        console.log('\nFinalizando a aplicação');
        break;
        default:
        //mostrar erro
        console.log('\nOpção inválida');
        break;
    }
    prompt('Pressione enter para continuar..');
} while(option!=4)

