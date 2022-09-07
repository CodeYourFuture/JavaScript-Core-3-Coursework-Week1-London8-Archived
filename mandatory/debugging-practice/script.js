let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  // Logical error in line 10 expected == to be ===.
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function

// Reference error / Logical error in line 38 - expected title to be author.
// Reference / Logical error in line 40 - expected pages to be check.
// Reference error in line 40 - expected checked to === false and not === "",
function submit() {
  if (
    title.value === null ||
    author.value === "" ||
    pages.value === null ||
    check.checked === false
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    // Reference error in line 45 - expected second element, title to be author.
    let book = new Book(title.value, author.value, pages.value, check.checked);
    // Reference error in line 47 - expected library to be myLibrary.
    myLibrary.push(book);
    render();
  }
}

// Reference error in line 53 - expected Book to be new Book
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  // Syntax error in line 58 - for Loop missing a closing bracket ")".
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    cell4.appendChild(changeBut);
    let readStatus = "";
    // Logical error in line 89 - expected comparison to equal a strict comparison.
    // Logical error in line 89 - expected false to be true.
    if (myLibrary[i].check === true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerHTML = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check == !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again

    // Reference error in line 106, 107, 108 - delBut undefined - expected delBut to be delButton.
    let delButton = document.createElement("button");
    delButton.id = i + 5;
    cell5.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    // Reference error in line 110 - "clicks" is not a function - expected "clicks" to be "click".
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
