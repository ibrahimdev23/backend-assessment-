const express = require("express");
const cors = require("cors");
const controller = require("./controller")

const app = express();

const {getCompliment, getFortune, displayText, deleteTask, getQuote} = require('./controller')



app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/list", displayText)

app.delete("/api/list/:id", deleteTask)

app.get("/api/quote", getQuote);

app.listen(4000, () => console.log("Server running on 4000"));