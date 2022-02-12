const router = require("express").Router();



// Route Handling
router.get("/", (req, res) => {
  res.json({
    status: "running",
    success: true
  })
})


module.exports = router;