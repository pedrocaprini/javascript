var clicarai = window.document.getElementById('clicaae')
clicarai.addEventListener('click', clicar)
function clicar() {
    var nome = prompt('Qual é o seu nome?')
    var idade = Number.parseInt(prompt(`Olá, ${nome}! Quantos anos você tem?`))

    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}