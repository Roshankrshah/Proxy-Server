require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Starting proxy server project');
})

const PORT = process.env.PORT || 3232;

app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});
    