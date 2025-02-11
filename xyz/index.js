const express = require('express');
const userrouter = require('./src/auth');
app.use(express.json());

const app = express();
const PORT = 3000;

 
app.get('/', (req, res) => {
    res.send('<h1>Hello, World! This is an Express server!</h1>');
});

app.use('/auth',userrouter)
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})