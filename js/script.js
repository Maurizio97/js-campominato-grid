// DONE=> 1. l'utente sceglie il livello di difficoltà
// DONE=> 2 in base alla scelta creo una variabile che mi salva il livello
    // 2.1 se scegli 1 compare il gioco con una griglia 10 x 10
    // 2.2 se scegli 2 compare il gioco con una griglia 9 x 9
    // 2.3 se scegli 3 compare il gioco con una griglia 7 x 7
// DONE=> 3 creo una funzione per creare un elemento
// 4 creo un ciclo che mi permetta di inserire i quadrati nel DOM
// 5 se l'utente clicca su una delle caselle del gioco la casella cambia colore



// creo un promt per la scelta del livello
const choiseLiv = parseInt(prompt("scegli il livello digitando 1, 2 o 3"));

const squareCont = document.querySelector(".container-game");
console.log(squareCont);

// 3. variabile con l'elemento creato
let gameSquare = genElement("div", "square");
let spanSquare = document.createElement("span")
console.log(spanSquare);
//variabile contenente il livello scelto
let liv;
if(choiseLiv == 1){
    liv = 100;
} else if(choiseLiv == 2){
    liv = 81;
} else if (choiseLiv == 3){
    liv = 49;
}


// 4. ciclo per inserire i quadrati nel dom
for ( let i = 1; i <= liv ; i++){

    spanSquare.append(i);
    gameSquare.append(spanSquare);

    if( i == 100){
        gameSquare.classList.add("liv-1");
    } else if (i == 81){
        gameSquare.classList.add("liv-2");
    } else if (i == 49){
        gameSquare.classList.add("liv-3");
    }

    squareCont.append(gameSquare);
    console.log(squareCont);
}

console.log(squareCont);



/* funzioni utili */
//funzione per generare un elemento
function genElement(typeEl, classEl ){
    let elem = document.createElement(typeEl);
    elem.classList.add(classEl)
    return elem
}

