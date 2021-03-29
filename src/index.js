const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
})

const port = 3003;

app.listen(port, () => console.log(process.env.TEST+'listening on port '+port))