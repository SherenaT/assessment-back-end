console.log("test");
const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.querySelector("#fcFortune");
const form = document.querySelector("#menuOrder");
const chkbox = document.querySelector("#chkbox");
const submitBtn = document.querySelector("#submitOrder");
const fullName = document.getElementById("full-name");
const orderSection = document.getElementById("order-section");
const orangeChickenQuantity = document.getElementById("oChknValue");
const chowMeinQuanity = document.getElementById("chowMeinValue");
const friedRiceQuantity = document.getElementById("friedRiceValue");
const fortuneCookieQuantity = document.getElementById("fortCkeValue");

const baseURL = `http://localhost:4000/`;

complimentBtn.addEventListener("click", () => {
  axios.get(`${baseURL}api/compliment/`).then(function (response) {
    const data = response.data;
    alert(data);
  });
});

fortuneButton.addEventListener("click", () => {
  axios.get(`${baseURL}api/fortune/`).then(function (response) {
    const data = response.data;
    alert(data);
  });
});

submitBtn.addEventListener("click", () => {
  axios.get(`${baseURL}api/submitOrder/`).then(function (response) {
    const data = response.data;
    alert(data);
    // confirm(
    //   `You ordered ${orangeChickenQuantity.value}, ${chowMeinQuanity.value}, ${friedRiceQuantity.value}, and ${fortuneCookieQuantity.value}.`
    // );
  });
});

// makes the cards to display the items.
const displayItems = (arr) => {
  console.log(arr);
  while (orderSection.firstChild) {
    orderSection.removeChild(orderSection.firstChild);
  } //as long as there

  for (let i = 0; i < arr.length; i++) {
    const newItem = document.createElement("div");

    newItem.className = "new-item";

    newItem.innerHTML = `<h1 class='item-title'>Customers Name: ${arr[i].fullName}</h1>
        <p>order: ${arr[i].orgChk}, ${arr[i].chwMin}, ${arr[i].friedRice}, and ${arr[i].fortuneCookie}</p>
        <button class='delete-btn' value="${arr[i].id}">delete</button>`;

    orderSection.appendChild(newItem);

    let deleteBtns = document.getElementsByClassName("delete-btn");

    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", deleteItem);
    }
  }
};

// Delete an item
const deleteItem = (e) => {
  axios.delete(`${baseURL}api/order/${e.target.value}`).then((res) => {
    displayItems(res.data);
  });
};

// Adding a order item
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newItem = {
    fullName: fullName.value,
    orgChk: orangeChickenQuantity.value,
    chwMin: chowMeinQuanity.value,
    friedRice: friedRiceQuantity.value,
    fortuneCookie: fortuneCookieQuantity.value,
  };

  axios.post(`${baseURL}api/seeOrder`, newItem).then((res) => {
    displayItems(res.data);
  });

  fullName.value = "";
  orangeChickenQuantity.selectedIndex = 0;
  chowMeinQuanity.selectedIndex = 0;
  friedRiceQuantity.selectedIndex = 0;
  fortuneCookieQuantity.selectedIndex = 0;
});

//create variable for button
//create axios connection
//connect through back end with end point
//maybe use controllers -- remember to connect all files
//use 'nodemon server/index.js' to run server
//live server on HTML file
//POST - displaying order
//PUT - changing quantity
//DELETE - removing order
