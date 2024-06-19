const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é o líder de uma das nações mais poderosas do mundo, eleito na última eleição. Apesar de toda a infraestrutura e PIB de seu país, ele é um dos que mais produz poluição e também um dos que mais contribui para o aquecimento global.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "O novo representante da nação mais desenvolvida do mundo, temeu no começo de seu mandato sobre as questões climáticas,"
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
                afirmacao: "sua primeira ação foi a criação de políticas efetivas para resolver o problema, mas deixou o preço médio dos produtos e serviços do país mais caros diminuindo a circulação de dinheiro junto a economia"
            },
            {
                texto: "Dar prioridade para indústria e comércio e fazer somente o que pode ser feito sem diminuir o crescimento da economia do país de forma significativa.",
                afirmacao: "mas ele não quis atrapalhar a economia, agindo apenas de formas efetivas monetariamente, com o ônus de previsões de pouco resultado para a resolução do problema"
            }
        ]
    },
    {
        enunciado: "Você é chamado alguns meses depois de implementar suas poilíticas para uma convenção sobre mudanças climáticas, eles perguntam e cobram sobre a situação, mas exclusivamente na parte de como os empresários entraram no projeto do governo sobre Sustentabilidade ambiental",
        alternativas: [
            {
                texto: "você fala sobre políticas que serão implantadas nas empresas como por exemplo: obrigação legislativa para empresas doarem uma porcentagem de seu terreno industrial/comercial para replantio de vegetação nativa",
                afirmacao: "e na hora para se pronunciar sobre o assunto disse que estava trabalhando arduamente para acabar com o problema."
            },
            {
                texto: "Você fala somente que eles seram mais cobrados sobre as legislações atuais, pois mais políticas seriam prejudiais a economia e iriam diminuir a capacidade de crescimento social e econômico da população",
                afirmacao: "e na hora para se pronunciar sobre o assunto disse que estava fazendo o possível para resolver o problema."
            }
        ]
    },
    {
        enunciado: "Depois da conferência você sente que as suas decisões estão repercutindo demais e você pensa uma última vez. Será que essas decisões foram corretas? você acaba sendo reeleito e pensa se você deveria continuar com as mesmas leis e pensa no que fara nesse novo mandato",
        alternativas: [
            {
                texto: "Diminuir a poluição",
                afirmacao: "Depois de repensar sobre suas políticas ambientais no começo de seu segundo mandato ele decidiu retomar com as políticas decisivas que fizeram o país diminuir consideravelmente as emições de poluentes, que no futuro se tornaram referência no mundo inteiro e os outros países que ignoraram essas questões sofrem por causa do ar, águas e terras contaminadas"
            },
            {
                texto: "Diminuir pobreza",
                afirmacao: " Depois de repensar suas políticas para seu segundo mandato você decide focar na economia, mais especificamente no fim  da pobreza, apesar de um sucesso grandioso, as pesoas agora sofrem diariamente com a poluição diminuindo a expecttativa de vida da população, principalmente daqueles poucos que ainda continuam pobres"
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