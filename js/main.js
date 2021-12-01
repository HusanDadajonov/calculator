let elBtnClear = document.querySelector(".calculator__btn--clear"); 
let elBtnBoluv = document.querySelector(".calculator__btn--boluv"); 
let elBtnKopaytruv = document.querySelector(".calculator__btn--kopaytruv"); 
let elBtnClear2 = document.querySelector(".calculator__btn--clear2"); 
let elBtnSeven = document.querySelector(".calculator__btn--seven"); 
let elBtnEight = document.querySelector(".calculator__btn--eight"); 
let elBtnNine = document.querySelector(".calculator__btn--nine"); 
let elBtnMinus = document.querySelector(".calculator__btn--minus"); 
let elBtnFour = document.querySelector(".calculator__btn--four"); 
let elBtnFive = document.querySelector(".calculator__btn--five"); 
let elBtnThree = document.querySelector(".calculator__btn--three"); 
let elBtnSix = document.querySelector(".calculator__btn--six"); 
let elBtnPlus = document.querySelector(".calculator__btn--plus"); 
let elBtnOne = document.querySelector(".calculator__btn--one"); 
let elBtnTwo = document.querySelector(".calculator__btn--two"); 
let elBtnTeng = document.querySelector(".calculator__btn--teng"); 
let elBtnFoyiz = document.querySelector(".calculator__btn--foyiz"); 
let elBtnZed = document.querySelector(".calculator__btn--zed"); 
let elBtnDoc = document.querySelector(".calculator__btn--doc"); 
let elInp = document.querySelector(".calculator__input");
let calcResult = document.querySelector(".calculator__result");



elBtnClear2.addEventListener("click", () => {
    elInp.value = elInp.value.slice(0,-1);
})

elBtnClear.addEventListener("click", () => {
    elInp.value = "";
})

elBtnBoluv.addEventListener("click", () => {
    if(elInp.value != "" && elInp.value.slice(-1) != "*" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+" && elInp.value.slice(-1) != "-"){
        elInp.value += "/";
    }
})

elBtnKopaytruv.addEventListener("click", () => {
    if(elInp.value != "" && elInp.value.slice(-1) != "*" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+" && elInp.value.slice(-1) != "-"){
        elInp.value += "*";
    }
})

elBtnFoyiz.addEventListener("click", () => {
    if(elInp.value != "" && elInp.value.slice(-1) != "*" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+" && elInp.value.slice(-1) != "-"){
        elInp.value += "%";
    }
})

elBtnMinus.addEventListener("click", () => {
    if( elInp.value.slice(-1) != "-" && elInp.value.slice(-1) != "*" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+"){
        elInp.value += "-";
    }
})


elBtnPlus.addEventListener("click", () => {
    if(elInp.value != "" && elInp.value.slice(-1) != "+" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+" && elInp.value.slice(-1) != "*"){
        elInp.value += "+";
    }
})


elBtnTeng.addEventListener("click", () => {
    if(elInp.value != "" && elInp.value.includes("-") || elInp.value.includes("*") || elInp.value.includes("+") || elInp.value.includes("/")){
        let result = document.createElement("p");
        result.className = "style";
        result.innerHTML = eval(elInp.value);
        calcResult.appendChild(result);
        console.log(result);
        elInp.style.transform = "scale(0.8) translateX(-38px)";
        elInp.style.height = "70%";
        elInp.style.fontWeight = "300";
    }
})

elBtnDoc.addEventListener("click", () => {
    if(elInp.value != "" && elInp.value.slice(-1) != "."){
        elInp.value += ".";
    }
})

elBtnZed.addEventListener("click", () => {
    elInp.value += 0;
})

elBtnOne.addEventListener("click", () => {
    elInp.value += 1;
})

elBtnTwo.addEventListener("click", () => {
    elInp.value += 2;
})

elBtnThree.addEventListener("click", () => {
    elInp.value += 3;
})

elBtnFour.addEventListener("click", () => {
    elInp.value += 4;
})

elBtnFive.addEventListener("click", () => {
    elInp.value += 5;
})

elBtnSix.addEventListener("click", () => {
    elInp.value += 6;
})

elBtnSeven.addEventListener("click", () => {
    elInp.value += 7;
})

elBtnEight.addEventListener("click", () => {
    elInp.value += 8;
})

elBtnNine.addEventListener("click", () => {
    elInp.value += 9;
})




