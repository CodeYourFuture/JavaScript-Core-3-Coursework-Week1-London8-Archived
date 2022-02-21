let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    //cahane new Book to newBook
    let book1 = newBook("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = newBook(
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
function submit() {
  console.log(title.value);
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return false;
  } else {
    //change new Book to newBook
    //change second title.value to author.value
    let book = newBook(title.value, author.value, pages.value, check.checked);
    //change Library to myLibrary
    myLibrary.push(book);
    render();
  }
}

function newBook(title, author, pages, check) {
  //define a object for book
  const bookObj = {};
  //replace this with name of object
  bookObj.title = title;
  bookObj.author = author;
  bookObj.pages = pages;
  bookObj.check = check;
  //return bookObj
  return bookObj;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
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
    if (myLibrary[i].check == false) {
      //change Yes to No
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    changeBut.innerHTML = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    //change delBtn to delButton
    delButton.id = i + 5;

    //change delBtn to delButton
    cell5.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    //change clicks to click
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
