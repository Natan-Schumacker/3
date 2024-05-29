const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um líder de uma das nações mais poderoas do mundo, eleito na ultima eleição, porém apesar de todo a infraestrutura e PIB de seu país, ele é um dos que mais produz gases do efeito estufa",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "O novo representande da nação mais desenvolvida do mundo, temeu no começo de seu mandato sobre as questões climaticas. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "O novo líder na maior nação do mundo começou seu mandato entusiasmado para resolver os problemas climaticas pendentes do país"
            }
        ]
    },
    {
        enunciado: "O que você faria sobre as questões climáticas?",
        alternativas: [
            {
                texto: "Diminuir a emição de gases por meio de leis e fiscalização ao custo de deiminuir a produção industrial",
                afirmacao: ""
            },
            {
                texto: "Ignorar isso por enguanto e fazer somento o possível sem diminuir o crescimento da econômia",
                afirmacao: ""
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();