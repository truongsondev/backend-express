"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000; // nguyên tắc lập trình k được nhúng một số nào vô code

// count connect
const countConnect = () => {
   const numberConnection = mongoose.connections.length;
   console.log(`Number of connections ${numberConnection}`);
};

// check over load connect
const checkOverLoad = () => {
   setInterval(() => {
      const numberConnection = mongoose.connections.length;
      const numberCores = os.cpus().length;
      const memoryUsage = process.memoryUsage().rss;
      // Example maximum number of connections based on numbr osf cores
      const maxConnections = numberCores * 5;
      console.log(`Active connection:: ${numberConnection}`);
      console.log(`Memory usage:: ${memoryUsage / 1024 / 1024}MB`);
      if (numberConnection > maxConnections) {
         console.log("Connection overload detected");
      }
   }, _SECONDS); // moniter every 5 second
};

module.exports = { countConnect, checkOverLoad };
