const rutaProm = document.querySelector(".promenad");
const rutaJogg = document.querySelector(".jogging");
const rutaSitup = document.querySelector(".situps");
const rutaStyrka = document.querySelector(".styrka");
const rutaBurp = document.querySelector(".burpees");
const rutaTrappa = document.querySelector(".trappor");

const btnSum = document.querySelector(".btn-primary");

const rutaTid = document.querySelector(".lista1");
const rutaKcal = document.querySelector(".lista2");
const rutaHögst = document.querySelector(".tyngsta");

/*Global variabel för varje tids pass är 30 minuter */
var pass = 30;

btnSum.addEventListener('click', function () {
    /* Skapat variabel för promenad*/
    var promenad = Number(rutaProm.value);
    console.log(promenad);

    /* Skapat variabel för jogging*/
    var jogging = Number(rutaJogg.value);
    console.log(jogging);
    
    /* Skapat variabel för situps*/
    var situps = Number(rutaSitup.value);
    console.log(situps);

    /* Skapat variabel för styrka */
    var styrka = Number(rutaStyrka.value);
    console.log(styrka);
    
    /* Skapat variabel för styrka */
    var burpees = Number(rutaBurp.value);
    console.log(burpees);

    /* Skapat variabel för trappa */
    var trappa = Number(rutaTrappa.value);
    console.log(trappa);

    /* Adderar alla aktivitets tid inom total tid */
    rutaTid.textContent = (promenad + jogging + situps + styrka + burpees + trappa) * pass;

    /* Adderar all kcal och summerar ihop hela kcal värde */
    rutaKcal.textContent = promenad * 107 + jogging * 240 + situps * 294 + styrka * 350 + burpees * 311 + trappa * 540;

    //Visar den aktivitet med högsta kcal
    if (trappa) {
        rutaHögst.textContent ="Trappor";
    } else if (burpees) {
        rutaHögst.textContent = "Burpees";
    } else if (styrka) {
    rutaHögst.textContent = "Styrketräning";
    } else if (situps) {
    rutaHögst.textContent = "Situps";
    } else if (jogging) {
    rutaHögst.textContent = "Jogging";
    } else {
        rutaHögst.textContent = "Promenad";
    }

})