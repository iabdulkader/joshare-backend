const router = require("express").Router();

const { signup } = require("../controllers/public/signup");

// Route Handling
router.post("/signup", signup);


module.exports = router;