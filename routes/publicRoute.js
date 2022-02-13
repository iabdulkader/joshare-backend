const router = require("express").Router();

// Controllers 
const { signup } = require("../controllers/public/signup");
const { getfiles } = require("../controllers/public/getfiles");

// Route Handling
router.post("/signup", signup);
router.get("/files/:pin", getfiles);

module.exports = router;