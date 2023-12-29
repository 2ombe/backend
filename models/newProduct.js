const mongoose = require("mongoose");

const specialRequest = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    image: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Special = mongoose.model("Special", specialRequest);
module.exports= Special;
