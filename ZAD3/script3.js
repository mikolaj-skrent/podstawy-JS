// $haslo = readline("Podaj swóje hasło: ");
// $liczbaZnakow = strlen($haslo);

// if ($liczbaZnakow < 5) {
//     echo "Jesteś w kategorii bardzo słabe hasło!";


// } else if ($liczbaZnakow >= 5 && $liczbaZnakow <= 8) {
//     echo "Jesteś w kategorii słabe hasło!";

// } else if ($liczbaZnakow >= 9 && $liczbaZnakow <= 11) {
//     echo "Jesteś w kategorii silne hasło!";


// } else if ($liczbaZnakow > 11) {
//     echo "Jesteś w kategorii bardzo silne hasło!";
// }
const message = document.getElementById("message");
const haslo = document.getElementById("haslo");


function checkPassword() {
    const tekstHasla = haslo.value;
    console.log("jestem");
    let maLiczbe = false;

    for (let i = 0; i < tekstHasla.length; i++) {
        if (tekstHasla[i] >= '0' && tekstHasla[i] <= '9') {
            maLiczbe = true;
            break;
        }
    }
    if (haslo.value.length <= 6) {
        message.textContent = "Twoje hasło zalicza się do kategorii słabe.";
        
        console.log("jestem 1 if");

    } else if (haslo.value.length > 6) {
        message.textContent = "Twoje hasło zalicza się do kategorii silne.";
        console.log("jestem 2 if");
    }
}

