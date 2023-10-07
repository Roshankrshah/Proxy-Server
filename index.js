require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middlewares/error');
const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/',router);

app.use(errorHandler);

const PORT = process.env.PORT || 3232;

app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});
    