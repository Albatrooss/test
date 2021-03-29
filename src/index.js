const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
})

const port = 3003;

app.listen(port)