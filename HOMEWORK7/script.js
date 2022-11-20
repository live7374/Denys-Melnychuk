// Task 1

function createNewTab(){
let newTab = window.open("", "", "width=300,height=300")
setTimeout(function(){newTab.resizeTo(500, 500)}, 2000)
setTimeout(function(){newTab.moveTo(200, 200)}, 4000)
setTimeout(function(){newTab.close}, 6000)
}

// Task 2

function changeCSS(){

    text.style.color = "orange";
    text.style.fontSize = "20";
    text.style.fontFamily = "Comic Sans MS";

}
// let btncs  = document.querySelector("btncs");
// console.log(btncs.innerHTML)

// btncs.addEventListener("click", function(event){
//     event.target.style
// })

// btncs.onclick = function(){console.log("btncs")}



// Task 3

function setBackgroundColor(color){
    document.body.style.backgroundColor = color;
};



// Task 4


myBtn.addEventListener("click", delColor);
function delColor(){
    let select = document.getElementById("nameSet");
    select.remove(select.selectedIndex)
}

// Task 5


// Task 6

