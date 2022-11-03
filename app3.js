function scrollRealizak() {
    let text = document.querySelector('.nadpis-jedna');
    let text2 = document.querySelector('.nadpis-dva');
    let textPozice = text.getBoundingClientRect().top;
    let screenPozice = window.innerHeight/1.1;
    let textPozice2 = text.getBoundingClientRect().top;
    let screenPozice2 = window.innerHeight/1.9;

    if(textPozice < screenPozice) {
        text.classList.add('nadpis-jedna-uka')
    }

    if(textPozice2 < screenPozice2) {
        text2.classList.add('nadpis-dva-uka')
    }
}

window.addEventListener('scroll', scrollRealizak)