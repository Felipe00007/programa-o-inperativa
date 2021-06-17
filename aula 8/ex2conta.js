//conta bancaria 
//16/06/2021

let conta = {
    nome : "felipe",
    numeroConta : 12333,
    saldo : 100,
    deposito : function(dinheiro) {
        this.saldo += dinheiro 
        console.log(`${this.nome} deposito realizado novo saldo ${this.saldo}` )

    },
    saque : function(dinheiro) {
       if(dinheiro <= this.saldo ){
          this.saldo -= dinheiro
          console.log(`${this.nome} saque realizado novo saldo ${this.saldo}` )  
       }else console.log(`${this.nome} fundos insuficientes`)

        
    }

}
conta.deposito(300);
conta.saque(100);


function criarConta(nome, numeroConta, saldo) {
    this.nome = nome
    this.numeroConta = numeroConta
    this.saldo = saldo
    this.deposito = function(dinheiro) {
        this.saldo += dinheiro 
        console.log(`${this.nome} deposito realizado novo saldo ${this.saldo}` )

    }
    this.saque = function(dinheiro) {
       if(dinheiro <= this.saldo ){
          this.saldo -= dinheiro
          console.log(`${this.nome} saque realizado novo saldo ${this.saldo}` )  
       }else console.log(`${this.nome} fundos insuficientes`)

    }

} 
 const novaConta = new criarConta ("joao", 144, 500)
novaConta.deposito(100)
 novaConta.saque(5000);
  
 const novaConta1 = new criarConta ("maria", 3004, 900)
 novaConta1.deposito(200)
 novaConta1.saque(300);

