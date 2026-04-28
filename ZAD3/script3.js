
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
        message.style.color = "red";
        console.log("jestem 1 if");

    } else if (haslo.value.length > 6) {
        message.textContent = "Twoje hasło zalicza się do kategorii silne.";
        message.style.color = "green";
        console.log("jestem 2 if");
    }
}

