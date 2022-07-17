const inputSalario = document.querySelector('#ganho-mes');
const inputHorasdia = document.querySelector('#horas-dia');
const resposta = document.querySelector('#resposta');

const calcularValorHora = () => {
    const salario = inputSalario.valueAsNumber;
    const horasDia = inputHorasdia.valueAsNumber;
    const diasMes = 22;

    const ganhoPorHora = salario / (diasMes * horasDia);
    resposta.innerHTML = "R$" + ganhoPorHora.toFixed(2);

}