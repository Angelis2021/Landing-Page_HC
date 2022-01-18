
// Referente ao contador//

import Countdown from "./countdown.js";

const tempoParaOWWB = new Countdown("17 August 2022 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);



// Referente ao cadastro de dados//

const form = document.querySelector('form')
form.addEventListener('submit',(e) => {
e.preventDefault();

let nome=document.getElementById('nome').value;
let email=document.getElementById('email').value;
let data = {
nome,
email,
}

let convertData = JSON.stringify(data);

localStorage.setItem('lead', convertData)

let content = document.getElementById('content')

let carregando ='<p>Bora lá...</p>'

content.innerHTML = carregando

})

