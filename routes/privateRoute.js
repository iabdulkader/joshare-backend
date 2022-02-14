const router = require("express").Router();
const User = require("../db/schema/peopleSchema");

// Middlewares
const authCheck = require("../middlewares/authCheck");

// Controllers
const { addTime } = require("../controllers/private/addTime");
const { sendEmail } = require("../controllers/private/sendEmail");

// Route Handling
router.post("/addtime", authCheck, addTime);
router.post("/email", authCheck, sendEmail);

module.exports = router;