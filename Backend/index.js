const express = require('express');
const connectDB = require('./src/Database/db.js');
const userrouter = require('./src/Controllers/user.js');
const productrouter = require('./src/Controllers/product.js');

require('dotenv').config({path:'./config/.env'});
const app = express();
const PORT = process.env.PORT || 3000;
const url=process.env.db_url


app.use('/auth',userrouter)
app.use(express.json());
app.use('/product', productrouter);
app.get('/', (req, res) => {
    res.send('<h1>Hello, World! This is an Express server!</h1>');
});

app.listen(PORT, async () => {
    await connectDB(url)
    console.log(`Server is running at http://localhost:${PORT}`);
});
