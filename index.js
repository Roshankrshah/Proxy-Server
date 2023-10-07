require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const router = require('./routes/index');
const errorHandler = require('./middlewares/error');
const app = express();

app.use(cors());

const limiter = rateLimit({
    windowMs: 10*60*1000,
    max: 100
});

app.use(limiter);
app.set('trust proxy',1)

app.use(express.static('public'));

app.get('/',router);

app.use(errorHandler);

const PORT = process.env.PORT || 3232;

app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});
    