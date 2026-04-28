
const przyciskOblicz = document.getElementById('obliczBtn');
const poleLitry = document.getElementById('litry');
const paragrafWynik = document.getElementById('wynik');

przyciskOblicz.addEventListener('click', function() {
    
    const iloscLitrow = parseFloat(poleLitry.value);

   
    if (isNaN(iloscLitrow) || iloscLitrow <= 0) {
        paragrafWynik.innerText = "Proszę podać poprawną ilość litrów.";
        return;
    }

   
    const opcjePaliwa = document.getElementsByName('rodzaj');
    let cenaZaLitr = 0;

    for (let i = 0; i < opcjePaliwa.length; i++) {
        if (opcjePaliwa[i].checked) {
            cenaZaLitr = parseFloat(opcjePaliwa[i].value);
            break;
        }
    }

   
    const calkowityKoszt = iloscLitrow * cenaZaLitr;

   
    paragrafWynik.innerText = "Koszt paliwa: " + calkowityKoszt + " zł";
});