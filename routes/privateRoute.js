const router = require("express").Router();
const User = require("../db/schema/peopleSchema");

// Middlewares
const authCheck = require("../middlewares/authCheck");

// Controllers
const { addTime } = require("../controllers/private/addTime");
const { sendEmail } = require("../controllers/private/sendEmail");
const { uploadFile } = require("../controllers/private/uploadFile");
const { deleteFile } = require("../controllers/private/deleteFile");


// Route Handling
router.post("/addtime", authCheck, addTime);
router.post("/email", authCheck, sendEmail);
router.post("/file", authCheck, uploadFile);
router.delete("/file/:id", authCheck, deleteFile);

module.exports = router;