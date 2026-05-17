var clicaae = window.document.getElementById('clicaai')
clicaae.addEventListener('click', clicar)
function clicar() {
    numero = Number.parseInt(prompt('Digite um número inteiro qualquer'))
    antecessor = numero - 1
    sucessor = numero + 1
    window.alert(`Antes de ${numero}, temos o número ${antecessor}\nDepois de ${numero}, temos o número ${sucessor}`)
}