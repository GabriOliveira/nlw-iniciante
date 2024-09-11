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
const { select, input, checkbox } = require('@inquirer/prompts');

let meta = {
    value : 'tomar 2 litros de água diariamente',
    checked : false
}

let metas = [ meta ];

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "});


    if (meta.length == 0) {
        console.log('A meta está vazia');
        return ;
        
    }
    metas.push({
        value: meta, checked: false

    })
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: 'use as setas para mudar de meta, espaço para selecionar, e enter para finalizar',
        choices: [...metas],
        instructions: false
    })

    if(respostas.length == 0){
        console.log('nenhuma meta selecionada');
        
        return;
    }

    metas.forEach((m) => {
        m.checked = false;
    })

    //ForEach => para cada
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true;
    });

    console.log('Meta(as) Marcadas como Concluídas!!');

}

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
           await cadastrarMeta();
           console.log(meta);
        break;
       case 'listar':
            await listarMetas();
       break;
        case 'sair':
            console.log("Até a próxima!!");
            return;
    }
}
}

start();













