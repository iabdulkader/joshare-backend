const router = require("express").Router();
const User = require("../db/schema/peopleSchema");

// Middlewares
const authCheck = require("../middlewares/authCheck");

// Controllers
const { addTime } = require("../controllers/private/addTime");

// Route Handling
router.post("/addtime", authCheck, addTime)

module.exports = router;