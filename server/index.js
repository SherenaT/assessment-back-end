const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require("./controller.js");

//create variable to connect to index file

app.get("/api/compliment", ctrl.randomCompliment);

app.get("/api/fortune", ctrl.fortunecookies);

app.get("/api/submitOrder", ctrl.sumbitOrd);

app.post("/api/seeOrder", ctrl.addItem);

app.delete("/api/wishlist/:id", ctrl.deleteItem);

console.log("testing");
app.listen(4000, () => console.log("Server running on 4000"));
