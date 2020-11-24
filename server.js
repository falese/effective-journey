const express = require('express');
const documentRouter = require('./routes/document.router');
require('dotenv').config();

const PORT = process.env.PORT || 8099;
const app= express()




app.use(express.urlencoded({ extended: true }));

app.use(documentRouter);

 
app.listen(PORT,()=>{console.log(`Document Service is running on ${PORT}`)});