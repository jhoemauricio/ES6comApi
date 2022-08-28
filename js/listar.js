
//Importa a variável URL padrão do arquivo routes
import URL from './routes.js';

//Exporta a função listar como padrão
//função recebe o parametro id do usuário
export default function listar(id){

   
    //URL concatenada com o id do usuário
    fetch(URL+id).then(response=>{

        //converte a resposta em json
        response.json()
        
        //imprime a resposta da requisição
        .then(data=>console.log(data));
       
    }).catch(erro =>{
        console.log(erro);

    });
}