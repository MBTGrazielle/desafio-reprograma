const inputValorHora = document.querySelector('#valor-hora');
const inputHorasProjeto = document.querySelector('#horas-projeto');
const resposta = document.querySelector('#resposta');
const buttonCalcular = document.querySelector('.btn-calcular')
const buttonLimpar = document.querySelector('.btn-limpar')
const imgValor = document.querySelector('.img-valor')
const textoH2 = document.querySelector('.h2-valor')

buttonCalcular.addEventListener('click', () => {

    const horas = inputHorasProjeto.valueAsNumber;
    const valor = inputValorHora.valueAsNumber;

    const valordoprojeto = (valor * horas);
    resposta.innerHTML = `R$ ${valordoprojeto.toFixed(2)}`;

    if (!valordoprojeto) {
        resposta.innerHTML = "O preenchimento de todos os campos é obrigatório.";
        return;
    }

    if (valordoprojeto >= 1000) {
        imgValor.src = "../img/maldivas.jpeg";
        textoH2.innerHTML = "Partiu Maldivaaaaaaas!!! 😄 😍 ✈️ 💗 🏖️";
    } else {
        imgValor.src = "../img/bolsovazio.jpeg";
        textoH2.innerHTML = "Trabalhe mais!!! 😕 😰 💸 💔 😭";
    }

})

buttonLimpar.addEventListener('click', () => {
    inputValorHora.value = "";
    inputHorasProjeto.value = "";
    resposta.innerHTML = "Calcule o valor do seu projeto.";
    imgValor.src = "../img/cabecalho-fundo.png";
    textoH2.innerHTML = "";
})

