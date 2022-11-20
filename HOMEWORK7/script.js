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

liveButton.addEventListener("click", liveButtonClick);
liveButton.addEventListener("mouseover", liveButtonOver);
liveButton.addEventListener("mouseout", liveButtonOut);
let message = document.getElementById("message")
let myLive = document.querySelector("#myLive")

function liveButtonClick(){
    message.innerText += "Click \r\n";
}

function liveButtonOver(){
    message.innerText += "Over \r\n";
}

function liveButtonOut(){
    message.innerText += "Out \r\n";
}




// Task 6
let sizeMe= document.getElementById("sizeMe")

window.addEventListener('resize', sizing)

function sizing(){
    sizeMe.innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}

// Task 7