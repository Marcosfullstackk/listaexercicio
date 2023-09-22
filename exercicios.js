function desvio1(){

    let numero1 = prompt ("digite um numero")

    if( numero1 == 0 ) {
        console.log("ele é neutro" )

    } else if ( numero1 %2 == 0 ) {  
        console.log("numero é par")
    } else {
        console.log("o mumero é impar" )
    }
}

function desvio2(){

    let num1 = prompt ("digite um numero")
    let num2 = prompt ("digite um numero")

    num1 = parseInt (num1)
    num2 = parseInt (num2)

    if ( num1 > num2 ) {
        console.log( " o maior numero é" + num1 );
    } else if (num1 == num2 ){
        console.log("o numero é igual")
    } else { 
        console.log("o maior numero é" + num2 );
    }

}

function desvio3() {
    let gestante = prompt("Você é gestante?");
    let idade = prompt("Você tem mais de 65 anos?");
    let pcd = prompt("Você tem alguma deficiencia?");

    if(  gestante == "sim" || idade =="sim" || pcd == "sim" ){
        alert("Va para a fila preferencial")
    } else {
        alert("Va para a fila comum")
    }
}




function desvio3A() {
    let gestante = prompt("Você é gestante?");
    if(gestante=="sim"){
      }  else {
            alert("Va para a fila comum")
    } 

    let idade = prompt("Você tem mais de 65 anos?");
    if(idade=="sim"){
    }      else {
        alert("Va para a fila comum")
    alert("va para fila presencial")
    }

    let pcd = prompt("Você tem alguma deficiencia?");
    if(pcd=="sim"){
    alert("va para a fila presencial")
    }
      else {
        alert("Va para a fila comum")
    }
}
}

function desvio4(){
     let idade = parseInt( "qual a sua idade?");
    if(idade<16){
        alert("entrada proibida!")
    }  else if ( idade>=16 && idade < 18) {
        alert("entrada soment com responsavel!")
    
    }
}

function desvio5(){
 let login; "marcosvicius@senai"
 let senha;123345
 
 let loginDigitado = prompt("login")
 let senhaDigitado = prompt("seha:")

 if(loginDigitado == login) {
 }  if(senhaDigitado == senha) {
        alert("bem vindo, Marcos!")
    } else{
        alert("senha inválida")
      }  if(senhaDigitado == senha){
            alert("login invalido!")
        } else{
            alert("login e Senha invalidos!");
        }

        }
    
  
   


  
  }






 
