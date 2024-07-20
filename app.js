let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'jogo do numero';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um numero 1 a 10';
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo');
    exibirTextoNaTela('p', 'escolha entre 1 e 10 ');

}
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML =texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2}); 
}

exibirTextoNaTela('h1', 'jogo');
exibirTextoNaTela('p', 'escolha entre 1 e 10 ');

function verificarChute(){
   // console.log('o botão foi ...');
   let chute = document.querySelector('input').value;

   if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Vocẽ acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa} `
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    if(chute > numeroSecreto){
        exibirTextoNaTela('p','o numero é menor');

    }else{
        exibirTextoNaTela('p', 'o numero é maior');
    }
   }
   tentativas++;
   limparCampo();
   }
   

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}