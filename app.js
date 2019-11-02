const express = require("express");
const app = express();
const graphQlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require('dotenv').config();



const mongoDB_url = process.env.MONGO_URL;




mongoose
    .connect(
        mongoDB_url

    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });


app.use("/graphql", graphQlHTTP({
    schema,
    graphiql: true

}));

app.listen(4000, () => {
    console.log("app listening on port 4000");
})