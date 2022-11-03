let jednou = 1;

let checky = document.querySelectorAll('input');

function checked() {
        for(let i = 0; i < checky.length; i++) {
        checky[i].addEventListener('change', () => {

             if (checky[0].checked === true) {
                 let nadpis1 = document.querySelectorAll('.nad')[0];
                 nadpis1.style.opacity = '1';
                 nadpis1.style.transition = 'all 4s'
             } else {
                 let nadpis1 = document.querySelectorAll('.nad')[0];
                 nadpis1.style.transition = 'all 0.4s'
                 nadpis1.style.opacity = '0';
             }

             if (checky[1].checked === true) {
                 let nadpis2 = document.querySelectorAll('.nad')[1];
                 nadpis2.style.opacity = '1';
                 nadpis2.style.transition = 'all 6s'
             } else {
                 let nadpis2 = document.querySelectorAll('.nad')[1];
                 nadpis2.style.transition = 'all 0.4s'
                 nadpis2.style.opacity = '0';
             }

            if (checky[2].checked === true) {
                  let nadpis3 = document.querySelectorAll('.nad')[2];
                  nadpis3.style.opacity = '1';
                  nadpis3.style.transition = 'all 6s'
              } else {
                  let nadpis3 = document.querySelectorAll('.nad')[2];
                  nadpis3.style.transition = 'all 0.4s'
                  nadpis3.style.opacity = '0';
              }

              if (checky[3].checked === true) {
                 let nadpis4 = document.querySelectorAll('.nad')[3];
                 nadpis4.style.opacity = '1';
                 nadpis4.style.transition = 'all 6s'
             } else {
                 let nadpis4 = document.querySelectorAll('.nad')[3];
                 nadpis4.style.transition = 'all 0.4s'
                 nadpis4.style.opacity = '0';
             }
         })
     }
 }

 checked();


setInterval(() => {
    document.getElementById('radio' + jednou).checked = true;
    jednou++;
    if (jednou > 4) {
    jednou = 1;    
}
    if (checky[0].checked === true) {
    let nadpis1 = document.querySelectorAll('.nad')[0];
    nadpis1.style.opacity = '1';
    nadpis1.style.transition = 'all 4s'
}   else {
    let nadpis1 = document.querySelectorAll('.nad')[0];
    nadpis1.style.transition = 'all 0.4s'
    nadpis1.style.opacity = '0';
}

    if (checky[1].checked === true) {
    let nadpis2 = document.querySelectorAll('.nad')[1];
    nadpis2.style.opacity = '1';
    nadpis2.style.transition = 'all 6s'
}   else {
    let nadpis2 = document.querySelectorAll('.nad')[1];
    nadpis2.style.transition = 'all 0.4s'
    nadpis2.style.opacity = '0';
}

    if (checky[2].checked === true) {
     let nadpis3 = document.querySelectorAll('.nad')[2];
     nadpis3.style.opacity = '1';
     nadpis3.style.transition = 'all 6s'
 }  else {
     let nadpis3 = document.querySelectorAll('.nad')[2];
     nadpis3.style.transition = 'all 0.4s'
     nadpis3.style.opacity = '0';
 }

    if (checky[3].checked === true) {
    let nadpis4 = document.querySelectorAll('.nad')[3];
    nadpis4.style.opacity = '1';
    nadpis4.style.transition = 'all 6s'
}   else {
    let nadpis4 = document.querySelectorAll('.nad')[3];
    nadpis4.style.transition = 'all 0.4s'
    nadpis4.style.opacity = '0';
}
}, 7000);


