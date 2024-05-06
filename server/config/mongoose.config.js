// Importing mongoose
const mongoose = require("mongoose");

// Getting the database name from environment variables
const dbName = process.env.DB;

// Connecting to the MongoDB database
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then(() => { console.log(`Established a connection to the database ${dbName}`); })
    .catch(err => console.log("Something went wrong when connecting to the DB ", err));
