const Controller = require("../controller/controller");

const router = require("express").Router();

router.get("/", Controller.GetAll);
router.post("/", Controller.CreateTodo);
router.get("/:todoId", Controller.GetOneTodo);
router.patch("/:todoId", Controller.UpdateTodo);
router.delete("/:todoId", Controller.DeleteTodo);

module.exports = router;
