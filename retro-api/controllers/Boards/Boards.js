const Boards = require("../../models/Boards/Boards");
const mongoose = require("mongoose");

const autoSetIdCard = mongoose.ObjectId;

module.exports.getAllBoards = async (req, res, next) => {
  try {
    const boardFromDB = await Boards.find();
    res.json(boardFromDB);
  } catch (err) {
    console.log(err);
    console.log("error");
    res.send(err);
  }
};

module.exports.postBoard = async (req, res, next) => {
  const postBoard = new Boards({
    name: req.body.name,
    description: req.body.description ? req.body.description : "No description",
    createDate: Date.now(),
    cards: req.body.cards ? req.body.cards : [],
  });
  try {
    const savedBoard = await postBoard.save();
    res.json(savedBoard);
  } catch (err) {
    res.send(err);
  }
};

module.exports.getBoardByID = async (req, res, next) => {
  try {
    const board = await Boards.findById(req.params.id);
    if (!board) {
      throw new Error("Board not found");
    }
    res.send(board);
  } catch (err) {
    res.send(err);
  }
};

module.exports.updateBoard = async (req, res, next) => {
  try {
    const updateBoard = await Boards.findByIdAndUpdate(req.params.id, req.body);
    if (!updateBoard) {
      throw new Error("Board not found");
    }
    res.send({ success: true });
  } catch (err) {
    res.send(err);
  }
};

module.exports.deleteBoard = async (req, res, next) => {
  try {
    const deleteBoard = await Boards.findByIdAndDelete(req.params.id);
    if (!deleteBoard) {
      throw new Error("Board not found");
    }
    res.send({ success: true });
  } catch (err) {
    res.send(err);
  }
};

module.exports.addCards = async (req, res, next) => {
  try {
    const addedCard = {
      id: autoSetIdCard,
      name: req.body.name,
      columnType: req.body.columnType ? req.body.columnType : "A",
    };

    const boardWithCards = await Boards.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { cards: addedCard } },
      { upsert: true }
    );
    res.send({ success: true});
  } catch (err) {
    res.send(err);
  }
};
