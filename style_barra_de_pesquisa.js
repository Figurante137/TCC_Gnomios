const pesquiso = document.getElementById("barra_pesquisa");

pesquiso.addEventListener("input", search);

function search() {
    // Obtem o valor da barra de pesquisa
    const searchTerm = pesquiso.value.toLowerCase();

    // Obtem todos os cards dentro da área de pesquisa
    const cards = document.querySelectorAll('#area_de_pesquisa .limitador');

    // Filtra os cards que correspondem ao termo de pesquisa
    const matchingCards = Array.from(cards).filter(function (card) {
        const cardName = card.querySelector('.card').getAttribute('data-name').toLowerCase();
        return cardName.includes(searchTerm);
    });

    // Reordena os cards na área de pesquisa
    const areaDePesquisa = document.getElementById('area_de_pesquisa');
    matchingCards.forEach(function (card) {
        areaDePesquisa.prepend(card);
    });

    // Oculta os cards que não correspondem ao termo de pesquisa
    cards.forEach(function (card) {
        const cardName = card.querySelector('.card').getAttribute('data-name').toLowerCase();
        if (cardName.includes(searchTerm)) {
            card.style.display = 'flex'; // Exibe o card se for uma correspondencia
        } else {
            card.style.display = 'none'; // Oculta o card se não for uma correspondencia
        }
    });
}