const router = require("./routes/main");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

// const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sb3q3.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
mongoose.connect('mongodb+srv://root:Z78EPIwcCD8m1e0h@cluster0.pzaqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on Port: " + PORT);
});

