const router = require("express").Router();
const User = require("../db/schema/peopleSchema");

// Route Handling
router.get("/", (req, res) => {
  res.json({
    status: "running",
    success: true
  })
})

router.post("/", async (req, res) => {
  let data = req.body;
  
  let user = new User(data)
  
  let response = await user.save()
  console.log(response)
  res.json(response)
})


module.exports = router;