const url = require('url');
const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_KEY_VALUE = process.env.API_KEY_VALUE
const API_KEY_NAME = process.env.API_KEY_NAME
const API_BASE_URL = process.env.API_BASE_URL

router.get('/',async(req,res,next)=>{
    try{
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url,true).query,
        })

        const apiRes = await axios(`${API_BASE_URL}?${params}`);
        const data = await apiRes.data;

        res.status(200).send(data);
    }catch(error){
        next(error);
    }
});

module.exports = router;