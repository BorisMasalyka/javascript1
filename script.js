let repetir = true

while(repetir) {
    let adivinanza = prompt("¿Qué es algo y a la vez nada?").toLocaleLowerCase()

    if(adivinanza == "el pez"){
        repetir = false
        alert("Correcto!")
    }
    else{
        alert("Vuelve a intentar")
    }
}



