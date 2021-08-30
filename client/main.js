console.log("test");
complimentBtn = document.getElementById("complimentButton");
fortuneButton = document.querySelector("#fcFortune");
form = document.querySelector("#menuOrder");
chkbox = document.querySelector("#chkbox");
submitBtn = document.querySelector("#submitOrder");

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
  orangeChickenQuantity = document.getElementById("oChknValue").value;
  chowMeinQuanity = document.getElementById("chowMeinValue").value;
  friedRiceQuantity = document.getElementById("friedRiceValue").value;
  fortuneCookieQuantity = document.getElementById("fortCkeValue").value;

  axios.get(`${baseURL}api/submitOrder/`).then(function (response) {
    const data = response.data;
    alert(data);
    confirm(
      `You ordered ${orangeChickenQuantity} Orange Chicken, ${chowMeinQuanity} Chow Mein, ${friedRiceQuantity} Fried Rice, and ${fortuneCookieQuantity} Fortune Cookie`
    );
  });
});

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
