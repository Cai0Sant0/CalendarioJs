// CALENDÁRIO

const dia = document.querySelector(".date");
const diaDaSemana  = document.querySelector(".day");
const mes  = document.querySelector(".month");
const ano  = document.querySelector(".year");


let dataAtual = new Date();

const diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

dia.innerHTML = (dataAtual.getDay()<10 ? "0":" ") + dataAtual.getDate();
diaDaSemana.innerHTML = diasSemana[dataAtual.getDay()];
mes.innerHTML = meses[dataAtual.getMonth()];
ano.innerHTML = dataAtual.getFullYear();



