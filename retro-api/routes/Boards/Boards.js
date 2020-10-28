const express = require("express");
const router = express.Router();
const boardControllers = require("../../controllers/Boards/Boards");


router.get("/", boardControllers.getAllBoards);

router.post("/", boardControllers.postBoard);

router.delete("/:id", boardControllers.deleteBoard);

router.patch("/:id", boardControllers.updateBoard);

router.get("/detail/:id", boardControllers.getBoardByID);

module.exports = router;
