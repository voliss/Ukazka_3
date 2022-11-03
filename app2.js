function scrollRealizak() {
    let text = document.querySelectorAll('.nadpis')[0];
    let text2 = document.querySelectorAll('.nadpis')[1];
    let text3 = document.querySelectorAll('.nadpis')[2];
    let textPozice = text.getBoundingClientRect().top;
    let screenPozice = window.innerHeight/1.3;

    if(textPozice < screenPozice) {
        text.classList.add('nadpis-uka')
        text2.classList.add('nadpis-uka')
        text3.classList.add('nadpis-uka')
    }
}

window.addEventListener('scroll', scrollRealizak)