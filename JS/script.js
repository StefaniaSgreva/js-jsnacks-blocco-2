"use strict"; 
/*
**Snack1**
Inserisci un numero, 
se è pari stampa il numero, 
se è dispari stampa il numero successivo.

**Snack2**
Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.

**Snack3**
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
*/

//**Snack1**

let userNum = document.getElementById('userNumber');
let btn = document.querySelector('.btn1');
const result = document.getElementById('result');

const checkNumber = function(){
    // take input from the user
    let userNum = parseInt(userNumber.value);
    // console.log(userNum);

    //check if the number is even
    if(userNum % 2 == 0) {
        // console.log("The number is even.");
        result.innerHTML = userNum;
    }
    // if the number is odd
    else {
        // userNum = userNum + 1;
        userNum++; 
        // console.log(userNum);
        result.innerHTML = userNum;

    }
}
btn.addEventListener('click', checkNumber);

//**Snack2**

const guest = document.getElementById('clickMe');

function generateName(){
    const first_name = ["Jay","Daisy","Tom","Jordan","Myrtle","George","Meyer","Nick"];

    const last_name = ["Gats","Buchanan","Buchanan","Baker"," Wilson"," Wilson","Wolfsheim","Carraway"];

    let randFirstN = first_name[Math.floor(Math.random() * first_name.length)];
    let randLastN = last_name[Math.floor(Math.random() * last_name.length)];
    console.log(randFirstN, randLastN);

    let guestName = randFirstN + ' ' + randLastN;
      
    document.getElementById("random_name").innerHTML = guestName;
  }
guest.addEventListener('click', generateName);


