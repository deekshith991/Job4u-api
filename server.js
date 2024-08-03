console.log("[#] Initializing the server");

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const Db_name = process.env.DB_NAME || "DEV_DB";
const MongoUri =
    process.env.MONGO_URI || `mongodb://localhost:27017/${Db_name}`;
const port = process.env.PORT || 3333;

const app = express();
app.use(cors());
app.use(express.json());

// Db connection

mongoose.connect(MongoUri);

db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
    console.log("Error connecting server");
});
db.once("open", () => {
    console.log("[*] connected to Db");

    app.listen(port, () => {
        console.log(`[+] API getway is ${port}`);
    });
});

app.get("/api/test", async (req, res) => {
    return res.json({ status: "Online" }).status(200);
});
