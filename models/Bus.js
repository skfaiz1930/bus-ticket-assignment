const mongoose = require("mongoose");
const BusModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  hoursTaken: {
    type: String,
    required: true,
  },
  boardingPointName: [
    {
      type: String,
      required: true,
    },
  ],
  droppingPointName: [
    {
      type: String,
      required: true,
    },
  ],
  seatPrice: {
    type: Number,
    required: true,
  },
});
module.exports = Bus = mongoose.model("bus", BusModel);
