
var texto = document.querySelector('#input-texto');
var botaoCriptografar = document.querySelector('#btn-cripto');
var textoCriptografado = document.querySelector('#msg');
var botaoDescriptografar = document.querySelector('#btn-descripto');
var botaoCopiar = document.querySelector('#btn-copy');

botaoCriptografar.addEventListener('click', criptografar);

function criptografar(){
  event.preventDefault();
    var textoModificado = texto.value.replace(/a/gi, 'ai') 
    .replace(/e/gi,'enter')
    .replace(/i/gi,'imes')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');

    
    textoCriptografado.value = textoModificado;

}


var palavrasChave = ['enter','imes','ai','ober','ufat']


botaoDescriptografar.addEventListener('click', descriptografar);

function descriptografar(){
    event.preventDefault();

    var verificar = palavrasChave.some(elementoArray => texto.value.includes(elementoArray));
    if(verificar){
    
    var textoDescriptografado = texto.value.replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober','o')
        .replaceAll('ufat','u')

        console.log(textoDescriptografado)

        textoCriptografado.value = textoDescriptografado;
    
    } else {
        alert('A mensagem não está criptografada');
    }
}


botaoCopiar.addEventListener('click', copiar);

function copiar(){

   navigator.clipboard.writeText(textoCriptografado.value) ;
   texto.value = '';
   var campoTexto = document.querySelector('#input-texto') 
   campoTexto.focus();

   alert("Agora é só colar!")
}




/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/