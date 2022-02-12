const router = require("express").Router();

const { signup } = require("../controllers/public/signup");
const { getfiles } = require("../controllers/common/getfiles");

// Route Handling
router.post("/signup", signup);
router.get("/files/:pin", getfiles);


module.exports = router;