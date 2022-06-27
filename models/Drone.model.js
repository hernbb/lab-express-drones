// Iteration #1
const mongoose = require("mongoose");

// aqui creamos el Schema
const droneSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  propellers: {
    type: Number,
  },

  maxSpeed: {
    type: Number,
  }
  
});

// crear el Model
const Drone = mongoose.model("drone", droneSchema);
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "student" indica como se llamara nuestra colección => "students"

module.exports = Drone;
