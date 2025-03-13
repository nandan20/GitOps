const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, this is a CI/CD test!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
