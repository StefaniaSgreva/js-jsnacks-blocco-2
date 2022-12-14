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
// const guestList = [];

function generateName(){
    const first_names = ["Jay","Daisy","Tom","Jordan","Myrtle","George","Meyer","Nick"];

    const last_names = ["Gats","Buchanan","Buchanan","Baker"," Wilson"," Wilson","Wolfsheim","Carraway"];

    // let randFirstN = first_name[Math.floor(Math.random() * first_name.length)];
    // let randLastN = last_name[Math.floor(Math.random() * last_name.length)];
    // console.log(randFirstN, randLastN);

    // let guestName = randFirstN + ' ' + randLastN;

    let nLen = first_names.length;
    let list  = "<ul>";
    for(let i = 0; i < nLen; i++){
        let randFirstN = first_names[Math.floor(Math.random() * first_names.length)];
        let randLastN = last_names[Math.floor(Math.random() * last_names.length)];
        list += "<li>"  + randFirstN + ' ' + randLastN + "</li>";
    }
    list += "</ul>";

    document.getElementById("random_name").innerHTML = list;

  }
guest.addEventListener('click', generateName);



//**Snack3**

let btnGet = document.querySelector(".btn3");
let output = document.querySelector("#sum");


btnGet.addEventListener("click", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let oddNumbers = numbers.filter((num) => num % 2 == 1);
    let sum = 0;
    for (let i = 0; i < oddNumbers.length; i++) {
        sum += oddNumbers[i];
    }
    let result = sum;
    output.innerText = result;
  });



