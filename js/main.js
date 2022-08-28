//Importa a função padrão lisar do arquivo listar.js
import listar from './listar.js';

//Seleciona o botao
var btn = document.querySelector('#btn');

//Adiciona o evento click ao botao
btn.addEventListener("click",function(){

    //Pega o id do usuário
    const id = document.querySelector('#id').value;

    //Chama a função listar
    listar(id);

});