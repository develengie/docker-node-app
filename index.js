const express = require("express");
const { default: fetch } = require("node-fetch");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    fetch("http://localhost:3005")
        .then((res) => res.json())
        .then((number) => res.send(`Random number - ${number}.`));
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
