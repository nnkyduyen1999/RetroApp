const Boards = require("../../models/Boards/Boards");
const mongoose = require("mongoose");


module.exports.updateCard = async (req, res, next) => {
  const cardId = mongoose.Types.ObjectId(req.params.idCard);
  try {
    const updatedBoard = await Boards.findOneAndUpdate(
      { _id: req.params.idBoard, "cards._id": cardId },
      {
        $set: {
          "cards.$.name": req.body.name,
        },
      },
      { new: true }
    );
    res.json(updatedBoard);
    if (!updateBoard) {
      throw new Error("Board not found");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports.deleteCard = async (req, res, next) => {
    const cardId = mongoose.Types.ObjectId(req.params.idCard);
  try {
    const deleteCard = await Boards.update(
      { _id: req.params.idBoard},
      {$pull: {
          cards: {_id: cardId}
      }},
      {multi: true}
    );
    if (!deleteCard) {
      throw new Error("Card not found");
    }
    res.send({success: true})
  } catch (err) {
    res.send(err);
  }
};
