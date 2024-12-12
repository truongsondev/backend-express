const express = require("express");
const helmet = require("helmet");
const compression = require("compression");

const morgan = require("morgan");
const app = express();
// init middlwares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression()); // giảm dung lượng dữ liệu phải vận chuyển

//init db
require("./dbs/init.mongodb");
const { checkOverLoad } = require("./helper/check.connect");
checkOverLoad();
//init routes
app.get("/", (req, res, next) => {
   return res.status(200).json({
      message: "Welcome to SU",
   });
});

//handling error

module.exports = app;
