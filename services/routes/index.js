const router = require("express").Router();
const activity = require("./activity");
const todo = require("./todos");

router.use("/activity-groups", activity);
router.use("/todo-item", todo);

module.exports = router;
