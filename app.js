function scrollPrihlaska() {
    let text = document.querySelector('.pobidka');
    let textPozice = text.getBoundingClientRect().top;
    let screenPozice = window.innerHeight/1.3;

    if(textPozice < screenPozice) {
        text.classList.add('pobidka-uka')
    }
}

window.addEventListener('scroll', scrollPrihlaska);