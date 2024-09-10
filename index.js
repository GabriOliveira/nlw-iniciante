//arrays, objetos
let meta = {
    value: 'estudar todo dia',//value do meta;
    checked: false,
    log: (info) => {//método
        console.log(info)
    }
}
meta.value = 'Não é mais estudar todo dia'
meta.log(meta.value);
//pega o objeto(meta) busca a propriedade chamada(log) no metodo é passado o argumento 
//info, na (meta.log()) é inserido no argumento(info) valor do argumento => (meta.value), isso ira retornar o value de meta;

//function
const criarMeta = () => {

}