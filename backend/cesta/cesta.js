//criar um array de cestas tal qual o de produtos

//listar produtos na cesta

//adicionar produto

//remover produtos

//remover todos os produtos

const produto = require("C:/Users/User/IdeaProjects/projeto-PES-ifood/backend/produtos/produtos.js");




 class cesta{

  constructor(idC,idClient,objarray){
    this.idCesta = idC;
    this.idCliente=idClient;
    this.produtos = objarray || [];

}

};
ola = new cesta(0,0,produto.getProdutoid(2,1))
listcestas = [ola];

getCesta = (idClient) => {


    for (let i=0;i<listcestas.length;i++){

        if (listcestas[i].idCliente==idClient){
          //  console.log(listcestas[i].produtos);
            return listcestas[i].produtos;
        }
    }

    //novaCesta= new cesta(listcestas.lenght,idClient)
    novaCesta= new cesta(idClient,idClient);
    listcestas.push(novaCesta);
    //console.log(listcestas.length);
    return listcestas[listcestas.length-1].produtos;
}

 addProduto = (idClient, idrest,idPro)=> {
    const cest=getCesta(idClient);
    const prodAdc = produto.getProdutoid(idrest,idPro);
    cest.produtos=prodAdc;
    //console.log(listcestas[idClient].produtos);
    return listcestas[idClient].produtos;

}






module.exports = {
 getCesta: getCesta,
 addProduto: addProduto,
};




