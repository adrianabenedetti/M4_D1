//ESERCIZIO 1

function calcolaInteri (num1,num2) {
    let somma = num1 + num2;
    console.log(somma);
    if (num1 === num2) {
        somma *= 3;
    }
    return somma;    
}

console.log(calcolaInteri (7,7));

//ESERCIZIO 2

function controllaSe50 (num1,num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } 
    return false;
}

console.log(controllaSe50 (50,12));
console.log(controllaSe50 (5,50));
console.log(controllaSe50 (25,25));
console.log(controllaSe50 (8,3));

//ESERCIZIO 3

function stringa(str, i) {
    return "".concat(str.substring(0, i), str.substring(i+1, str.length));
}

console.log(stringa("gatto",3));

//ESERCIZIO 4

function controllaPiuGrande(num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(controllaPiuGrande(6,14,23));

//ESERCIZIO 5

function controllaNum(num1,num2) {
    if ((num1 > 40 && num1 < 60 || num1 > 70 && num1 < 100) && (num2 > 40 && num2 < 60 || num2 > 70 && num2 < 100)) {
        return true
    }
    return false;
}

console.log(controllaNum(20,15));
console.log(controllaNum(85,75));

//ESERCIZIO 6

function ripetiStringa(stringa, num) {
    let stn = "";
    for(let i = 0; i < num; i++){
        stn = stn.concat(stringa);
    }
    return stn;
}

console.log(ripetiStringa("Ciao",5));

//ESERCIZIO 7

function controllaCitta(citta) {
    if (citta.startsWith("Los") || citta.startsWith("New")) {
        return citta;
    }
    return false;
}

console.log(controllaCitta("New York"));
console.log(controllaCitta("Roma"));
console.log(controllaCitta("Los Angeles"));

//ESERCIZIO 8

function controllaArr(arr1) {
    let sommaArr = 0;
    for(let element of arr1) {
        sommaArr += element;
    }
    return sommaArr;
}

console.log(controllaArr([52,41,86]));

//ESERCIZIO 9

function controlla1e3(arr2) {
    for(let element of arr2) {
        if (element === 1 || element === 3) {
            return true;
        }  
    }
    return false;
}

console.log(controlla1e3([5,3]));
console.log(controlla1e3([5,9]));

//ESERCIZIO 10

function controllaSe1e3(arr2) {
    for(let element of arr2) {
        if (element === 1 || element === 3) {
            return false;
        }  
    }
    return true;
}

console.log(controllaSe1e3([5,3]));
console.log(controllaSe1e3([5,9]));

//ESERCIZIO 11

let arr1 = ["stegosauro", "parasaurolofo", "spinosauro", "anchilosauro"];

function stringaPiuLunga (arr) {
    let stringa = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i].length > stringa.length) {
        stringa = arr1[i];
    }
   return stringa; 
    }
}

console.log(stringaPiuLunga(arr1));

//ESERCIZIO 12

function misuraAngolo (num) {
    if (num > 0 && num < 90) {
        return "Angolo Acuto"
    } else if (num > 90 && num < 180) {
        return "Angolo Ottuso"
    } else if (num == 90) {
        return "Angolo Retto"
    } else if (num == 180) {
        return "Angolo Piatto"
    }
} 

console.log(misuraAngolo(69))

// ESERCIZIO 13

function trovaNumPiuGrande (arr) {
    let index = 0;
    let numGrande = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > numGrande) {
            numGrande = arr[i]
            index = i
        }
    } return index;
}

let arr = [ 56, 34, 5, 89];

console.log(trovaNumPiuGrande (arr));

// ESERCIZIO 14 

function TrovaNumPariPiuGrande(arr) {
    for (let element of arr) {
        if (element > 0 && (element % 2) === 0)
        return element
    }
}

let arr = [ 56, 34, 5, 88];

console.log(TrovaNumPariPiuGrande(arr))


//ESERCIZIO 15

function controllaSePosNeg(num1, num2) {
    if (num1 > 0 && num2 < 0 || num1 < 0 && num2 > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(controllaSePosNeg(-5, 6))


// ESERCIZIO 16

function generaStringaMaiuscola(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        let first = str.substring(0, 3).toLowerCase();
        let end = "";
        if (str.length > 3) {
            end = str.substring(3).toUpperCase();
        }
        return first + end;
    }
}

console.log(generaStringaMaiuscola("Plesiosauro"))

// ESERCIZIO 17

function genera65o80(num1, num2) {
    const somma = num1 + num2;
    if (somma >= 50 && somma <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log(genera65o80(32,32))

// ESERCIZIO 18

function convertiNumStringa(num) {
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let value1 = "";
    let value2 = "";
    let value3 = "";
    if (num % 3 === 0) {
        cond1 = true;
        value1 = "Diego";
    }
    if (num % 5 === 0) {
        cond2 = true;
        value2 = "Riccardo";
    }
    if (num % 7 === 0) {
        cond3 = true;
        value3 = "Stefano";
    }
    if (!(cond1 || cond2 || cond3)) {
        return num;
    }
    return value1 + value2 + value3;
    
}

console.log(convertiNumStringa(30))

//ESERCIZIO 19

function acronimo(sentence) {
    let arr = sentence.split(" ");
    let result = "";
    for(let elem of arr) {
        result += elem.charAt(0).toUpperCase();
    }
    return result;
}

console.log(acronimo("senatus populus quirites romani"))

