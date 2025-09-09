const express = require("express");
const { default: fetch } = require("node-fetch");

const app = express();

const PORT = 3000;

const NUMBER_SERVER_HOST =
    process.env.NUMBER_SERVER_HOST ?? "http://number:3005";

app.get("/", (req, res) => {
    fetch(NUMBER_SERVER_HOST)
        .then((res) => res.json())
        .then((number) => res.send(`Random number - ${number}.`));
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
