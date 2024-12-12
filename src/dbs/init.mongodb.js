// Viết theo kiểu single tonge: Chỉ được gọi một lần khi phương thức instance được gọi lần đầu tiên
// 5.Có nên disConnect() liên tục không:
// 5.1: Không cần thiết vì mongosee dùng một cái pool(nhóm kết nối) để quản lí
// 5.1: db và nó sẽ tự động xử lí mở và đống connect khi cần

// 6.PoolSize là gì:
// 6.1: Trong ngữ cảnh của mongosee thì nhóm kết nối lại tập hợp các kết nối của db
// 6.1: mà có thể tái sử dụng được duy trì bởi database, nói dễ hiệu là số kết nối mở sẵn và khi có một yêu cầu kết nối thì sẽ có có sẵn
// 6.2: giúp tăng hiệu suất
"use strict";
const mongoose = require("mongoose");

const connectString = `mongodb+srv://su:letruongson212@cluster0.9awjo.mongodb.net/`;
const countConnect = require("../helper/check.connect");
class Database {
   constructor() {
      this.connect();
   }
   //connect
   connect(type = "mongodb") {
      if (1 === 1) {
         mongoose.set("debug", true);
         mongoose.set("debug", { color: true });
      }

      mongoose
         .connect(connectString, {
            maxPoolSize: 50,
         })
         .then((_) => {
            console.log("Connected mongoodb success Pro");
            countConnect();
         })
         .catch((err) => console.log("Error connect"));
   }

   static getInstance() {
      if (!Database.instance) {
         Database.instance = new Database();
      }

      return Database.instance;
   }
}

const instanceMongoodb = Database.getInstance();

module.exports = instanceMongoodb;
