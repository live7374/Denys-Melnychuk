// //Task 1

// let id = document.getElementById("test");
// id.innerHTML = `Last`;

// let id2 = document.querySelector("#test");
// id2.innerHTML = `Last 2`;

// //Task 2

// let image = document.querySelector(".image");
// console.dir(image);
// image.src = "cat.jpg";

// alert(image.outerHTML);

// //Task 3

// let divSelection = document.querySelectorAll("#text p");
// for (let i = 0; i < divSelection.length; i++) {
//   console.log(`Selector text : ${i} ${divSelection[i].innerHTML}`);
// }

// //Task 4

// let list = document.querySelector(`#list`).children;
// for (let i = 0; i < list.length; i++) {
//   alert(list[i].innerHTML);
// }

// alert(
//   `${list[0].innerHTML}, ${list[4].innerHTML}, ${list[1].innerHTML},  ${list[3].innerHTML}, ${list[2].innerHTML}`
// );

// //Task 5

// function changeAll() {
//   document.getElementsByTagName(`h1`)[0].style.backgroundColor = "green";
//   document.getElementById(`myDiv`).children[0].style.fontWeight = "bold";
//   document.getElementById(`myDiv`).children[1].style.color = "red";
//   document.getElementById(`myDiv`).children[2].style.textDecoration =
//     "underline";
//   document.getElementById(`myDiv`).children[3].style.fontStyle = "italic";

//   document.getElementById(`myList`).style.display = "flex";
//   document.getElementById(`myList`).style.listStyle = "none";

//   document.getElementsByTagName(`span`)[0].style.color = "rgba(1, 1, 1, 0.0)";
// }

// // Task 6

// function inpMessage() {
//   let input1 = document.getElementById(`input1`);
//   let huInput1 = prompt("Enter Text1");
//   let input2 = document.getElementById(`input2`);
//   let huInput2 = prompt("Enter Text2");
//   input1.setAttribute("value", huInput1);
//   input2.setAttribute("value", huInput2);

//   input1.value = huInput2;
//   input2.value = huInput1;
// }

// //Task 7

// let main = document.createElement("main");
// let div = document.createElement("div");
// let p = document.createElement("p");
// main.className = "mainClass check item";
// document.body.append(main);
// main.append(div);
// div.id = "myDiv";
// div.append(p);
// p.innerHTML = "First paragraph";
