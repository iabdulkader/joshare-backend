const router = require("express").Router();

// Controllers 
const { signup } = require("../controllers/public/signup");
const { getfiles } = require("../controllers/public/getfiles");
const { support } = require("../controllers/public/support");

// Route Handling
router.post("/signup", signup);
router.get("/files/:pin", getfiles);
router.post("/support", support);

module.exports = router;