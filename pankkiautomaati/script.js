    let saldo=0;
//    document.getElementById("saldo").textContent = saldo +"€";

function paivitaSaldo() {
    document.getElementById("saldo").textContent = saldo +"€";
}

function talleta () {
const summa = document.getElementById("talletusSumma").value;
if (isNaN(summa) || summa<=0) {
    document.getElementById("viesti").textContent="Wrong! Try again.";
    document.getElementById("talletusSumma").value = '';
    return
}
saldo += parseInt(summa);
paivitaSaldo();
document.getElementById("talletusSumma").value = '';
}

function nosta () {
    const nosto = document.getElementById("nostoSumma").value;
    if (isNaN(nosto) || nosto<=0) {
        document.getElementById("viesti").textContent="Wrong! Try again.";
        document.getElementById("nostoSumma").value = '';

        return
    }
    if (nosto>saldo) {
    document.getElementById("viesti").textContent="Not enough credit!";
    return;
    }
    saldo -= parseInt(nosto); 
    paivitaSaldo();
    document.getElementById("nostoSumma").value = '';
}

function pinEnter() {
    saldo=parseInt(Math.floor((Math.random()*1000)));
    document.getElementById("saldo").textContent = saldo +"€";
    document.getElementById("moneyActions").style.filter="none";
    document.getElementById("moneyActions").style.pointerEvents="auto";
}

document.getElementById("talletaBtn").addEventListener("click", talleta);
document.getElementById("nostaBtn").addEventListener("click", nosta);
document.getElementById("pinBtn").addEventListener("click", pinEnter);