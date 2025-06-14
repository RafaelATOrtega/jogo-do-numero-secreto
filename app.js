let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
let marcação = 1

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, `Italian Female`, {rate:1.1});
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    if(chute == numeroSecreto){
        exibirNaTela(`h1`,`Parabens giovannigna, você acertou, o numero é ${chute}`);
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        exibirNaTela(`p`,`com o total de ${tentativas} ${palavraTentativa}`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)}
        else if(chute < numeroSecreto){
            exibirNaTela(`h1`, `o numero secreto é maior que ${chute}`);
            exibirNaTela(`p`,``);
        } else if(chute > numeroSecreto){
            exibirNaTela(`h1`, `o numero secreto é menor que ${chute}`);
            exibirNaTela(`p`,``);
        }
        tentativas++;
        limparCampo()
    }


function gerarNumeroAleatorio(){
    let numerosEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length


    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteado = [];   
    }
    if (listaDeNumerosSorteados.includes(numerosEscolhido)){
       return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numerosEscolhido);
        return numerosEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector(`input`);
    chute.value = (``);
}


function reiniciarJogo(){
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial()
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
    marcação++
}

function exibirMensagemInicial(){
    exibirNaTela ('h1', 'Bem vinda Giovannigna');
    exibirNaTela ('p', 'De um parpite entre 01 e 100');
    exibirNaTela (`title`, `Aloou Giovanna?`);
}
