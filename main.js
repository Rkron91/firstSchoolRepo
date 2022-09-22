console.log("Javascript active");

const colorChangerBtn = document.querySelector("#colorChangeBtn");
const theH1 = document.querySelector("#headline");

// EventListener med funktion som ändrar h1...
//..färgen via variabeln "theH1".
colorChangerBtn.addEventListener("click",

function(){
    theH1.innerHTML = "Goodbye World";
},false
);