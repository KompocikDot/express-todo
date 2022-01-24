const mongoose = require("mongoose");

async function db_connect() {
    await mongoose.connect("mongodb+srv://username:password@cluster0.nauah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

db_connect();
const itemSchema = mongoose.Schema({
    thing_to_do: String,
}, {collection: 'todo'});


module.exports = mongoose.model("item", itemSchema);