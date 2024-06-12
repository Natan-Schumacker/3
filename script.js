const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é o líder de uma das nações mais poderosas do mundo, eleito na última eleição. Apesar de toda a infraestrutura e PIB de seu país, ele é um dos que mais contribui para o aquecimento global.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "O novo representante da nação mais desenvolvida do mundo, temeu no começo de seu mandato sobre as questões climaticas,"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "O novo líder da maior nação do mundo começou seu mandato entusiasmado para resolver os problemas climáticos pendentes do país,"
            }
        ]
    },
    {
        enunciado: "O que você faria sobre as questões climáticas?",
        alternativas: [
            {
                texto: "Diminuir a emissão de gases por meio de leis e fiscalização pesada ao custo de diminuir a produção industrial",
                afirmacao: "Sua primeira ação foi a criação de políticas efetivas para resolver o problema, mas deixou o preço médio dos produtos e serviços do país mais caros diminuindo a circulação de dinheiro junto a economia"
            },
            {
                texto: "Dar prioridade para indústria e comércio e fazer somente o que pode ser feito sem diminuir o crescimento da economia do país de forma significativa.",
                afirmacao: "mas ele não quis atrapalhar a economia, agindo apenas de formas efetivas monetariamente, com o ônus de previsões de pouco resultado para a resolução do problema"
            }
        ]
    },
    {
        enunciado: "Você é chamado alguns mêses depois de implementar suas poilíticas para uma convenção sobre mudandaças climáticas perguntam e cobram sobre a situação, mas exclusivamente na parte de como os empresarios entraram no projeto do governo",
        alternativas: [
            {
                texto: "você fala sobre politicas que seram implantadas nas empresas como por exemplo: obrigação legilativa para empresas doarem uma porcentagem de seu terreno industrial/comercial para replantio de vegetação nativa",
                afirmacao: ""
            },
            {
                texto: "Você fala somente que eles seram mais cobrados sobre as leislações atuais, pois mais politicas seriam prejudiais a economia e iriam diminuir a capacidade de",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Depois da conferência você sente que as suas decisões estão repertuctindo demais e você pensa uma ultima vez Será que essa desição foi a correta? você acaba sendo reeleito e pensa se vc deveria continuar com as mesmas leis",
        alternativas: [
            {
                texto: "Diminuir a poluição",
                afirmacao: "Sua primeira ação foi a criação de políticas efetivas para resolver o problema, mas deixou o preço médio dos produtos e serviços do país mais caros diminuindo a circulação de dinheiro junto a economia"
            },
            {
                texto: "Diminuir pobreza",
                afirmacao: "mas ele não quis atrapalhar a economia, agindo apenas de formas efetivas monetariamente, com o ônus de previsões de pouco resultado para a resolução do problema"
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