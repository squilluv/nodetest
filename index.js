const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('HEddldfl'));

app.listen(3000, () => console.log("3000!!"));