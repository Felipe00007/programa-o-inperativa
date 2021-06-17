 function Aluno(nome, numeroDoArquivo, listaNotas){
     this.nome = nome 
     this.numeroDoArquivo = numeroDoArquivo
     this.listaNotas = listaNotas
     this.media = function(){
         let somaNotas = 0
         for(let i = 0; i < listaNotas.length; i++){
             somaNotas += listaNotas[i]
         }
        return somaNotas / listaNotas.length
     }



 }
 const alunoFelipe = new Aluno("felipe", 1544, [10, 0, 7, 4])

 console.log(alunoFelipe.media())