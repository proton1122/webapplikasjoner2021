// Oppgave 1
const removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", () => {
  document.getElementById("remove").remove();
});

// Oppgave 2
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  document.getElementById("change").textContent = "Hei.";
});

// Oppgave 3
const userInputField = document.getElementById("input"); //inputfelt
const textField = document.getElementById("input-text"); //tekstfelt
let userInput = "";

userInputField.addEventListener("keyup", () => {
  // Not optimal, slow as hell.

  //textField.innerHTML = "";
  //userInput += userInputField.value.slice(-1);
  //textField.innerHTML = userInput;

  textField.textContent = "";
  userInput += userInputField.value.slice(-1);
  textField.textContent = userInput;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ul = document.getElementById("ul");
const listButton = document.getElementById("write-list");

listButton.addEventListener("click", () => {
  myList.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });
});

// Oppgave 5
const newElementParent = document.getElementById("placeholder");
const userSelectedElement = document.getElementById("select");
const userText = document.getElementById("text");
const createElementButton = document.getElementById("create");

createElementButton.addEventListener("click", createElement);

function createElement() {
  let element = document.createElement(userSelectedElement.value);
  element.textContent = userText.value;
  newElementParent.appendChild(element);
}

// Oppgave 6
const list = document.getElementById("list");
const removeButton = document.getElementById("remove-li");

removeButton.addEventListener("click", removeLi);

// removes the last child, but for some reason
// it takes more than one button click
function removeLi() {
  let child = list.lastChild;
  list.removeChild(child);
}

// Oppgave 7
const inputField = document.getElementById("name");
const disableButton = document.getElementById("order");

inputField.addEventListener("keyup", disable);

function disable() {
  let word = inputField.value;

  if (word.length > 4) {
    disableButton.setAttribute("disabled", true);
  }
}

// Oppgave 8
// had to check solution to get this one to work
const listParent = document.querySelector(".children");
const parentChildList = listParent.querySelectorAll("li");
const colorButton = document.getElementById("color");

colorButton.addEventListener("click", changeColor);

function changeColor() {
  parentChildList.forEach((element, index) => {
    if (index % 2 === 0) {
      element.style = "border: solid 5px green";
    } else {
      element.style = "border: solid 5px pink";
    }
  });
}