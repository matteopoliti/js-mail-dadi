/* Gioco dei dadi */

const btnDado1 = document.getElementById("buttonDado1");
const dado1Html = document.getElementById("dado1");
const dado2Html = document.getElementById("dado2");
const risultatoHtml = document.getElementById("risultato");

btnDado1.addEventListener( "click", function(){
   
    let dadoRandom1 = RandomNumber( 1, 6)
    dado1Html.innerHTML = dadoRandom1

    let dadoRandom2 = RandomNumber( 1, 6)
    dado2Html.innerHTML = dadoRandom2

    if(dadoRandom1 > dadoRandom2){
        risultatoHtml.innerHTML = `<p class = "text-center fw-bold text-success">Il vincitore è il lanciatore del dado numero 1 con il valore di ${dadoRandom1}</p>`
    }else if(dadoRandom2 > dadoRandom1){
        risultatoHtml.innerHTML = `<p class = "text-center fw-bold text-success">Il vincitore è il lanciatore del dado numero 2 con il valore di ${dadoRandom2}</p>`
    }else{
        risultatoHtml.innerHTML = `<p class = "text-center fw-bold text-warning"> La sfida è terminata in pareggio rilancia i dadi! </p>`
    }
})
    
function RandomNumber (min, max){
    return Math.floor( Math.random()*(max - min + 1) + min)
}


/* Mail */
const buttonEmailHtml = document.getElementById("buttonEmail");
const emailHtml = document.getElementById("emailPostGame");
const risultatoLoginHtml = document.getElementById("risultatoLogin");

const email = ["matteo@gmail.com", "lorenzo@gmail.com", "marco@gmail.com", "federico@gmail.com", "alessandro@gmail.com"]

let variabileControllore = false

buttonEmailHtml.addEventListener( "click", function(){
    for(let i = 0; i < email.length; i++){
        if( email[i] === emailHtml.value ){
            variabileControllore = true
        }
        
    }
    if(variabileControllore == true){
        risultatoLoginHtml.innerHTML = `<p class="text-success"> Email valida, Login effettuato </p>`
    }else{
        risultatoLoginHtml.innerHTML = `<p class="text-danger"> Email non valida, riprovare oppure regitrarsi se non sei ancora un membro</p>`
    }
})


document.getElementById("ricaricaButton").addEventListener("click", ricaricaPagina);



function ricaricaPagina() {
    location.reload();
}