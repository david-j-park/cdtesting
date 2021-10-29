const express = require('express');

const app = express();
const port = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send("hello");
})
app.use(express.static('public'));

app.listen(port);