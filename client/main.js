console.log("test");
const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.querySelector("#fcFortune");
const form = document.querySelector("#menuOrder");
const chkbox = document.querySelector("#chkbox");
const submitBtn = document.querySelector("#submitOrder");
const fullName = document.getElementById("full-name");
const wishlistSection = document.getElementById("wishlist-section");

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
  const orangeChickenQuantity = document.getElementById("oChknValue").value;
  const chowMeinQuanity = document.getElementById("chowMeinValue").value;
  const friedRiceQuantity = document.getElementById("friedRiceValue").value;
  const fortuneCookieQuantity = document.getElementById("fortCkeValue").value;
  axios.get(`${baseURL}api/submitOrder/`).then(function (response) {
    const data = response.data;
    alert(data);
    confirm(
      `You ordered ${orangeChickenQuantity}, ${chowMeinQuanity}, ${friedRiceQuantity}, and ${fortuneCookieQuantity}.`
    );
  });
});

// // makes the cards to display the items.
// const displayItems = (arr) => {
//   console.log(arr);
//   while (wishlistSection.firstChild) {
//     wishlistSection.removeChild(wishlistSection.firstChild);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     const newItem = document.createElement("div");

//     newItem.className = "new-item";

//     newItem.innerHTML = `<h1 class='item-title'>${arr[i].name}</h1>
//         <p>priority: ${arr[i].priority}</p>
//         <button class='delete-btn' value="${arr[i].id}">delete</button>`;

//     wishlistSection.appendChild(newItem);

//     let deleteBtns = document.getElementsByClassName("delete-btn");

//     for (let i = 0; i < deleteBtns.length; i++) {
//       deleteBtns[i].addEventListener("click", deleteItem);
//     }
//   }
// };

// // Delete an item
// const deleteItem = (e) => {
//   axios.delete(`${baseURL}api/wishlist/${e.target.value}`).then((res) => {
//     displayItems(res.data);
//   });
// };

// // Adding a wishlist item
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const newItem = {
//     fullName: fullName.value,
//     orgChk: orangeChickenQuantity,
//     chwMin: chowMeinQuanity,
//     friedRice: friedRiceQuantity,
//     fortuneCookie: fortuneCookieQuantity,
//   };

//   axios.post(`${baseURL}api/seeOrder`, newItem).then((res) => {
//     displayItems(res.data);
//   });

//   fullName.value = "";
//   orangeChickenQuantity.selectedIndex = 0;
//   chowMeinQuanity.selectedIndex = 0;
//   friedRiceQuantity.selectedIndex = 0;
//   fortuneCookieQuantity.selectedIndex = 0;
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //1. grab all the form data (quanity of ordered food), learned how to grab selected value
//   orangeChickenQuantity = document.getElementById("oChknValue").value;
//   chowMeinQuanity = document.getElementById("chowMeinValue").value;
//   friedRiceQuantity = document.getElementById("friedRiceValue").value;
//   fortuneCookieQuantity = document.getElementById("fortCkeValue").value;
//   let items = ["Orange Chicken", "Chow Mein", "Fried Rice", "Fortune Cookie"];

//   getCheckBox = function () {
//     let checkbox = document.getElementsByClassName("chkbox");

//     console.log(checkbox);
//   };
//   getCheckBox();
//   // alert(fortuneCookieQuantity, checkbox);

//   //2.put all data into object called ordered
//   ordered = {};
//   ordered.push;

//   //3.post the data to anxios endpoint with the object created of order
//   // axios.post(`${baseURL}api/submitOrder/`).then(function (response) {
//   //   const data = response.data;
//   //   alert(data);
//   // });
// });
//create variable for button
//create axios connection
//connect through back end with end point
//maybe use controllers -- remember to connect all files
//use 'nodemon server/index.js' to run server
//live server on HTML file
//POST - displaying order
//PUT - changing quantity
//DELETE - removing order
