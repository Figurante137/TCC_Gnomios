const pesquisa = document.getElementById("barra_pesquisa");
const conteudo = document.getElementById("conteudo-inicial");
const fot = document.getElementById("o-footer");
const home = document.getElementById("logo");
const grupocart = document.getElementById("o-cart")
const cart = document.getElementById("icon_cart");
const area_pesquisa = document.getElementById("area_de_pesquisa");
pesquisa.addEventListener("input", function(){
    conteudo.classList.add("desliga")
    fot.classList.add("desliga")
    grupocart.classList.add("desliga")
    area_pesquisa.style.display = "flex"
    if(pesquisa.value === ''){
        conteudo.classList.remove("desliga")
        fot.classList.remove("desliga")
        grupocart.classList.add("desliga")
        area_pesquisa.style.display = "none"
    }
})
cart.addEventListener("click", function(){
    conteudo.classList.add("desliga")
    fot.classList.add("desliga")
    area_pesquisa.style.display = "none"
    pesquisa.value = ''
    grupocart.classList.remove("desliga")
})
home.addEventListener("click", function(){
    conteudo.classList.remove("desliga")
    fot.classList.remove("desliga")
    area_pesquisa.style.display = "none"
    pesquisa.value = ''
    grupocart.classList.add("desliga")
})