const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, World! This is an Express server!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
