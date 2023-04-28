const Controller = require("../controller/controller");

const router = require("express").Router();

router.get("/", Controller.GetActivity);
router.post("/", Controller.Create);
router.get("/:activityId", Controller.GetOne);
router.patch("/:activityId", Controller.Update);
router.delete("/:activityId", Controller.Delete);

module.exports = router;
