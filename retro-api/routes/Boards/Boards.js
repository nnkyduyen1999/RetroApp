const express = require("express");
const router = express.Router();
const Boards = require("../../models/Boards/Boards");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const boardFromDB = await Boards.find();
    res.json(boardFromDB);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/", async (req, res, next) => {
  const postBoard = new Boards({
    name: req.body.name,
    description: req.body.description,
    cards: req.body.cards,
  });
  try {
    const savedBoard = await postBoard.save();
    res.json(savedBoard);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
