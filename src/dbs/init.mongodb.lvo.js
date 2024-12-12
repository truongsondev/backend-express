"use strict";

const mongoose = require("mongoose");

const connectString = `mongodb+srv://su:letruongson212@cluster0.9awjo.mongodb.net/`;

mongoose
   .connect(connectString)
   .then((_) => console.log("Connected mongoodb success"))
   .catch((err) => console.log("Error connect"));

if (1 === 0) {
   mongoose.set("debug", true);
   mongoose.set("debug", { color: true });
}

module.exports = mongoose;
