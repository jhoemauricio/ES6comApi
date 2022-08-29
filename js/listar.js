
//Importa a variável URL padrão do arquivo routes
import URL from './routes.js';

//Exporta a função listar como padrão
//função recebe o parametro id do usuário
export default function listar() {


    //URL 
    fetch(URL).then(response => {

        //converte a resposta em json
        response.json()

            //imprime a resposta da requisição
            .then(data => {

                //Armazena o resultado da resposta, acessando a propriedade data
                const dados = data.data;

                console.log(dados);

                //Percorre a variavel dados que recebe a data.data
                Object.keys(dados).forEach(function (item) {
                    //acessa a propriedade first_name
                    console.log(dados[item].first_name);
                });



            }

            );

    }).catch(erro => {
        console.log(erro);

    });
}

