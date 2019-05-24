//Variables
/*var a;
a = "hola";
alert(a);
alert(a + " Mundo");
a = 1;
alert(a);
a = 1.5;
alert(a);
a = true;
alert(a);

a = [1,"hola",3];
alert(a[1]);

var o = {
    patas: 4,
    color: "café",
    sentarse: function(s){
        if(s)
            return "Está sentado";
        else
            return "No está sentado";
    }
};

alert(o.sentarse(true));

function suma(a,b){
    var resultado = a + b;
    return resultado;
}

alert(suma(2,5));
alert(suma(6,15));*/

//DOM - Document Object Model

var btnYes = document.getElementById("yes");
btnYes.addEventListener("click",next);
var btnNo = document.getElementById("no");
btnNo.addEventListener("click",next);

var resultado = 0;
var cards = [];
cards["t1"] = 1,
cards["t2"] = 2,
cards["t3"] = 4,
cards["t4"] = 8,
cards["t5"] = 16,
cards["t6"] = 32;

function next(e){
    //Llamar a la tarjeta
    let card = document.getElementsByClassName("visible");
    var id = card[0].id;
    if(e.currentTarget.id == "yes"){
        //Asignar el primer número de la tarjeta
        //Obtener el primer número de la tarjeta visible
        var n = cards[id];
        //Asignarlo a la tarjeto
        resultado = resultado + n;
    }

    if(id == "t6"){
        alert(resultado);
        id = "t0";
        resultado = 0;
    }
    //Mostrar la siguiente tarjeta
    card[0].classList.remove("visible");
    //obtener id de la tarjeta
    var auxiliar = id.split("");
    var nextCard = document.getElementById("t"+(parseInt(auxiliar[1])+1));
    nextCard.classList.add("visible");
    var screen = document.getElementById("screen");
    screen.prepend(nextCard);
}