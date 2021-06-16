let cardapio =['pizza', 'bolo', 'sanduíche']
let nome = ['Restaurante do Felipe\n']
 
 function Restaurante(nome, cardapio){
   this.nome = nome
   this.cardapio = cardapio 
   this.entradas = function mensagem (){
     return "Seja bem vindo ao " + this.nome + this.cardapio
   }
   
 }
    const meuRestaurante = new Restaurante (nome, cardapio)
    
  console.log(meuRestaurante.entradas());