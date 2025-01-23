//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
let limite = 0;

function adicionarAmigo(){
    const input = document.getElementById('amigo').value;
    let lista = document.getElementById('listaAmigos');
    if(input !== '' && !nomes.includes(input)){
        lista.innerHTML += `<li>${input}</li>`;
        nomes.push(input);
    } else if(input === ''){
        alert('Digite um nome válido');
    } else {
        alert('Nome já adicionado');
    }
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    if(limite < 1 && nomes.length > 0){
        let lista = document.getElementById('resultado');
        let num = Math.floor(Math.random() * nomes.length);
        const resultado = nomes[num];
        lista.innerHTML += `<li>${resultado}</li>`;
        limite++;
    } else if(nomes.length == 0){
        alert('Não há nomes para sortear');
    } else {
        alert('Não há mais sorteios');
    }
}