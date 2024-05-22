let prviInput = document.getElementById("input1");

let drugiInput = document.getElementById("input2");

let treciInput = document.getElementById("input3");

let buttonProvjeriVeciBroj = document.getElementById("prviButton");

let randomButton = document.getElementById("randomButton");


function ispisiVeciBroj() {
    let prviBroj = prviInput.value;
    let drugiBroj = drugiInput.value;


    if(prviBroj > drugiBroj){
        treciInput.value = `Broj ${prviBroj} je veći`;
    } else if(drugiBroj > prviBroj){
        treciInput.value = `Broj ${drugiBroj} je veći`;
    } else {
        treciInput.value = `Broj ${prviBroj}, brojevi su jednaki`;
    }

};

function unesi2RandomBrojaIPrikaziVeci(){

    let prviBroj = prviInput.value;
    let drugiBroj = drugiInput.value;

    prviBroj = Math.floor(Math.random() * 10); 
    drugiBroj = Math.floor(Math.random() * 10);

    debugger;

    prviInput.value = prviBroj;
    drugiInput.value = drugiBroj;

    if(prviBroj > drugiBroj){
        treciInput.value = `Broj ${prviBroj} je veći`;
    } else if(drugiBroj > prviBroj){
        treciInput.value = `Broj ${drugiBroj} je veći`;
    } else {
        treciInput.value = `Broj ${prviBroj}, brojevi su jednaki`;
    }

}


buttonProvjeriVeciBroj.addEventListener("click", ispisiVeciBroj);
randomButton.addEventListener("click", unesi2RandomBrojaIPrikaziVeci);
