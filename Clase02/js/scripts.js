var fn = {
    parrafos: document.querySelectorAll("p"),//Seleccionar todos los párrafos del documento
    h1: document.querySelector("h1"),//seleccionar el h1
    green: document.querySelector(".green"),//Seleccionar el párrafo con clase "green"
    btns: document.querySelectorAll("button"),
    radio: document.querySelectorAll("input[type=radio]"),
    selectedItems: document.querySelectorAll("p"),
    init: function(){
        for(let i=0;i<fn.btns.length;i=i+1)
            fn.btns[i].addEventListener("click",fn.changeColor);

        for(let i = 0;i < fn.radio.length;i++)
            fn.radio[i].addEventListener("click",fn.changeItems);
    },
    changeColor: function(e){
        let btn = e.currentTarget;
        switch(btn.textContent){
            case "Rojo":
                if(fn.selectedItems.length != undefined){
                    for(i = 0;i < fn.selectedItems.length;i++)
                        fn.selectedItems[i].style.color = "#770000";
                }else
                    fn.selectedItems.style.color = "#770000";
                break;
            case "Verde":
                if(fn.selectedItems.length != undefined){
                    for(i = 0;i < fn.selectedItems.length;i++)
                        fn.selectedItems[i].style.color = "#007700";
                }else
                    fn.selectedItems.style.color = "#007700";
                break;
            case "Azul":
                if(fn.selectedItems.length != undefined){
                    for(i = 0;i < fn.selectedItems.length;i++)
                        fn.selectedItems[i].style.color = "#000077";
                }else
                    fn.selectedItems.style.color = "#000077";
        }
    },
    changeItems: function(e){
        switch(e.currentTarget.parentNode.textContent){
            case ' Título':
                fn.selectedItems = fn.h1;
                break;
            case ' Clase "green"':
                fn.selectedItems = fn.green;
                break;
            case ' Párrafos':
                fn.selectedItems = fn.parrafos;
            case ' Todos':
                fn.selectedItems = document.querySelectorAll('p, h1');
        }
    }
};

window.addEventListener("load",fn.init);
