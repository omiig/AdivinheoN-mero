let numeroSorteado = document.getElementById("numeroSorteado")
let palpites =  document.getElementById("palpites")
let enviar = document.getElementById("enviar")
let ajuda = document.getElementById("ajuda")
let tentativas = document.getElementById("tentativas")
let res = document.getElementById("res")

let numero = Math.floor(Math.random() * (100 - 1 + 1)) + 1
let vezes = 0

enviar.onclick = function () {
    let inputText = document.getElementById("inputText")
    let palpite = inputText.value
    palpite = Number(palpite)

    if (isNaN(palpite)) {
        alert("Você deve digitar apenas números")
    } else if (palpite > 100 || palpite < 0) {
        alert("Você deve digitar um valor válido!")
    } else {
        if (palpite == numero) {
            res.innerHTML = "Parabéns!!! Você acertou!"
            vezes++
            tentativas.innerHTML = vezes + " tentativas"
            palpites.innerHTML += `Palpite ${vezes}: ${palpite} <br>`
            ajuda.innerHTML = ""
            numeroSorteado.innerHTML = numero
        } else {
            res.innerHTML = "Número Errado! Tente novamente"
            vezes++
            tentativas.innerHTML = vezes + " tentativas"
            palpites.innerHTML += `Palpite ${vezes}: ${palpite} <br>`
            if (palpite > numero) {
                ajuda.innerHTML = "Chute mais baixo"
            } else {
                ajuda.innerHTML = "Chute mais alto"
            }
        }
    
    }

    
}
    


