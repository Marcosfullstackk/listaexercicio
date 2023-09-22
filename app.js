function lacos_de_repeticao_exercicio1(){
    
    let verificador = false 

    while ( verificador == false ) {
        let numero1 = prompt ("escreva quantos segundos vc deseja.")

        if (numero1 <= 59) {
            for( let i = 1 ; i <= numero1; i++ ){
                alert(i)
                console.log(i)
            } 
            verificador = true
            
        } else {
            alert("Número errado")
        } 
    }
}

function lacos_de_repeticao_exercicio2(){


  let mumerodigitado = prompt ("digite um numero")



for(let i=1 ; i<=9 ; i++ ){
    console.log(`${mumerodigitado} X ${ i } = ${( mumerodigitado * i) }`)

}
    }



 function lacos_de_repeticao_exercicio5(){

    let login = "abc";
    let senha = "123"

    let tentativas = 3

    let loginDigitado
    let senhaDigitado

    do{
        loginDigitado = prompt("login");
        senhaDigitado = prompt("seha:" );

        if((loginDigitado == login) && (senhaDigitado == senha) ){
            alert(`Seja em vindo, ${login}` );
             tntativas =0

        } else if ( tentativas>1){
            alert("login ou senha invalidos");
            tentativas--
            alert(`${tentativas} tentaivas (s) restante (s)`);


        } else {alert("login ou Senha invalidos")
        tentativas--
        alert("Senha bloqueada!" );}

    }
   while(tentaivas =0) 
}
 




                                                          // MATRIZES  18/09 23






  function tarefa1(){

    alert(" Listas de compras!");
    let lista = [];
    let opcao;
    let resposta = "";

        while (opcao !=3) { 
            opcao = parseInt= prompt( (" - menu - \n1 - Incluir item\n2- Ver Lista\n 3 - Sair"));
           switch (opcao) {
                case 1 :
                    let item =  prompt("Que item deseja inserir?");
                    lista.push(item);
                     alert("item incluío");
                   break;

                case 2 : 
                    for(let i=0; i< lista.length; i++){
                      resposta = resposta + listai[i]; + "\n";
                    }
                        alert(resposta)
                     break

                case 3 :
                     alert("Saindo");
                     break
                     default:
                         alert("Insira uma opção valida");

            }               
        }
    }
  

tarefa1()

