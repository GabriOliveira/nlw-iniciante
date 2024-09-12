const { select, input, checkbox } = require("@inquirer/prompts");

let mensagem = "Bem vindo ao App de Metas";
let meta = {
  value: "tomar 2 litros de água diariamente",
  checked: false,
};

let metas = [meta];

const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta: " });

  if (meta.length == 0) {
    mensagem = "A meta está vazia";
    return;
  }
  metas.push({
    value: meta,
    checked: false,
  });

  mensagem = "Meta cadastrada com sucesso!";
};

const listarMetas = async () => {
  const respostas = await checkbox({
    message:
      "use as setas para mudar de meta, espaço para selecionar, e enter para finalizar",
    choices: [...metas],
    instructions: false,
  });

  metas.forEach((m) => {
    m.checked = false;
  });

  if (respostas.length == 0) {
    mensagem = "nenhuma meta selecionada";
    return;
  }

  //ForEach => para cada
  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta;
    });
    meta.checked = true;
  });

  mensagem = "Meta(s) marcada(s) como concluída(s)";
};

const metasRealizadas = async () => {
  //sempre que o execute for verdadeiro...pegara a meta e coloca em uma nova lista
  const realizadas = metas.filter((meta) => {
    return meta.checked;
  });

  if (realizadas.length == 0) {
    mensagem = "Não existem metas realizadas :(";
    return;
  }
  await select({
    message: "Metas Realizadas: " + realizadas.length,
    choices: [...realizadas],
  });
};
//andar [] - viajar [] - estudar [x]
// andar/viajar nn tem valor == false, false é diferente de true? sim, entt entra como meta aberta 
const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true;
    })

    if(abertas.length == 0){
        mensagem = "Não existem metas abertas! :)";
        return;
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    //.map => vai executar uma função para cada META
        //sempre vai modificar o array original
    const metasDesmarcadas = metas.map((meta) => {
        
        return {value: meta.value, checked: false}
    })
    const itemsADeletar = await checkbox({
        message:
          "selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
      });

        if(itemsADeletar.length == 0){
            mensagem = 'Nenhum item para deletar';
            return;
            
        }

        itemsADeletar.forEach((item) => {
//filter vai retornar um novo array, esse novo array vai entrar nas proprias metas
//supondo que andar está selecionado ou seja andar é o nosso item(andar[1]) item é == meta? não, pois andar é diferente da meta na posição zero;
//dps, andar é diferente de andar? não, isso ficara false(não) entt será removido da lista de metas
//só ficara na lista de metas aquilo q não foi filtrado
            metas = metas.filter((meta) => {
                return meta.value != item;
            })
        })
        mensagem = "Meta(as) deletadas com sucesso!";
        
}

const mostrarMensagem = () => {
    console.clear();
    if (mensagem != "") {
        console.log(mensagem);
        console.log("");
        mensagem = ""
    }
}


const start = async () => {
  while (true) {
    mostrarMensagem();
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar",
        },
        {
          name: "Listar metas",
          value: "listar",
        },
        {
          name: "Metas realizadas",
          value: "realizadas",
        },
        {
            name: "Metas abertas",
            value: "abertas",
          },
          {
            name: "Deletar metas",
            value: "deletar",
          },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    });

    switch (opcao) {
      case "cadastrar":
        await cadastrarMeta();
        break;
      case "listar":
        await listarMetas();
        break;
      case "realizadas":
        await metasRealizadas();
        break;
        case "abertas":
        await metasAbertas();
        break;
        case "deletar":
        await deletarMetas();
        break;
      case "sair":
        console.log("Até a próxima!!");
        return;
    }
  }
};

start();


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