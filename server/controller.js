//create variable to connect to index file

const mealOrder = [];
globalId = 1;

module.exports = {
  //variables
  randomCompliment: (req, res) => {
    compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];
    // console.log(compliments);

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    randomCompliment = compliments[randomIndex];
    // console.log(randomCompliment);

    res.status(200).send(randomCompliment);
  },
  fortunecookies: (req, res) => {
    let fortune = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air. ",
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
      "A friend is a present you give yourself.",
      "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
    ];

    let randomIndex = Math.floor(Math.random() * fortune.length);
    fortunecookies = fortune[randomIndex];

    res.status(200).send(fortunecookies);
  },

  sumbitOrd: (req, res) => {
    sumbitOrd = "Your order was submitted";

    res.status(200).send(sumbitOrd);
  },
  addItem: (req, res) => {
    const { fullName, orgChk, chwMin, friedRice, fortuneCookie } = req.body;

    let newItem = {
      fullName,
      orgChk,
      chwMin,
      friedRice,
      fortuneCookie,
      id: globalId,
    };

    mealOrder.push(newItem);
    console.log(mealOrder);
    res.status(200).send(mealOrder);
    globalId++;
  },
  deleteItem: (req, res) => {
    const { id } = req.params;

    const index = mealOrder.findIndex((e) => e.id === +id);

    mealOrder.splice(index, 1);

    res.status(200).send(mealOrder);
  },
};
