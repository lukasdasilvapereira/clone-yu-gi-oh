const avancando = document.getElementById("btn-avancar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoatual = 0
const voltando = document.getElementById("btn-voltar")

avancando.addEventListener("click", function() {

    if(cartaoatual === cartoes.length - 1) {
        return
    }

    const cartaoselecionado = document.querySelector(".selecionado")
    cartaoselecionado.classList.remove("selecionado")

    cartaoatual++
    cartoes[cartaoatual].classList.add("selecionado")
    
})

voltando.addEventListener("click", function() {

    if(cartaoatual === 0) {
        return
    }

    const cartaoselecionado = document.querySelector(".selecionado")
    cartaoselecionado.classList.remove("selecionado")

    cartaoatual++
    cartoes[cartaoatual].classList.add("selecionado"
    )
})