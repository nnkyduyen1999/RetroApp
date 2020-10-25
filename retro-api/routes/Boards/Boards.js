const express = require("express");
const router = express.Router();

/* GET users listing. */
const data = [
  {
    id: "1",
    name: "board 1",
    description: "description board 1",
    card: ["card1", "card2"],
  },
  {
    id: "2",
    name: "board 2",
    description: "description board 2",
    card: ["card1", "card2"],
  },
  {
    id: "3",
    name: "board 3",
    description: "description board 3",
    card: ["card1", "card2"],
  },
  {
    id: "4",
    name: "board 4",
    description: "description board 4",
    card: ["card1", "card2"],
  },
  {
    id: "5",
    name: "board 5",
    description: "description board 5",
    card: ["card1", "card2"],
  },
  {
    id: "6",
    name: "board 6",
    description: "description board 6",
    card: ["card1", "card2", "card 3"],
  },
];
router.get("/", function (req, res, next) {
  try {
     res.json(data);
  } catch {
    res.json({ message: err });
  }
});

module.exports = router;
