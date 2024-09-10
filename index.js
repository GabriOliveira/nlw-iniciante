/*let meta = {
    value: 'estudar todo dia',//value do meta;
    checked: false,
   
}

let metas = [
    meta, 
    {
        value: 'caminhar',
        checked: true
    }
]
console.log(metas[1].value)
//pegou o value de outro objeto dentro da variavel metas;
*/
/*
meta.value = 'Não é mais estudar todo dia'
meta.log(meta.value);
//pega o objeto(meta) busca a propriedade chamada(log) no metodo é passado o argumento 
//info, na (meta.log()) é inserido no argumento(info) valor do argumento => (meta.value), isso ira retornar o value de meta;

//function
const criarMeta = () => {

}
    */
/*
const start = () => {
    //While => enquanto a condição for verdadeira ele executará tal trecho dado no executar
 /*let count = 0;
    while(count <= 10){
    console.log(count)
    count++
 }
}

start();

*/
const { select } = require('@inquirer/prompts');

const start = async () => {
    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch (opcao) {
        case 'cadastrar':
            console.log("vamos cadastrar");
            break;
       case 'listar':
                console.log("vamos listar");
                break;
        case 'sair':
            console.log("Até a próxima!!");
            return;
    }
}
}

start();













