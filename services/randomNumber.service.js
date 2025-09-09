const express = require("express");
const { getRandomNumber } = require("../utils/getRandomNumber");

const app = express();

const PORT = 3005;

app.get("/", (req, res) => {
    res.send(getRandomNumber(1, 100));
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
