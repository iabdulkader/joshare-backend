const mongoose = require("mongoose");

const supportSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true })

supportSchema.index( { "createdAt": 1 }, { expireAfterSeconds: 864000 } );

const Support = mongoose.model("support", supportSchema);

module.exports = Support;