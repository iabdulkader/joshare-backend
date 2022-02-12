const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
  pin: {
    type: String,
    require: true,
    unique: true
  },
  expire: {
    type: Date,
    required: true,
  },
  numberOfEmails: {
    type: Number,
    default: 0
  },
  files: [
    {
      fileName: {
        type: String,
        required: true
      },
      extName: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      downloadUrl: {
        type: String,
        required: true
      }
    }
    ]
}, { timestamps: true })

peopleSchema.index( { "expire": 1 }, { expireAfterSeconds: 0 } );

const People = mongoose.model("people", peopleSchema);

module.exports = People;