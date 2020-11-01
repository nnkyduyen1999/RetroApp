const express = require("express");
const router = express.Router();
const boardControllers = require("../../controllers/Boards/Boards");
const cardControllers = require("../../controllers/Cards/Cards");

router.get("/", boardControllers.getAllBoards);

router.post("/", boardControllers.postBoard);

router.patch("/:idBoard/:idCard", cardControllers.updateCard);

router.delete("/:idBoard/:idCard", cardControllers.deleteCard);

router.delete("/:id", boardControllers.deleteBoard);

router.patch("/:id", boardControllers.updateBoard);

router.get("/:id", boardControllers.getBoardByID);

module.exports = router;
