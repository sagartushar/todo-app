const express = require('express');
const app = express();
const port = 3000;

app.listen(port,function(err){
    if(err){
        console.log("Error occured");
    }
    console.log(`Server is running on port: ${port}`);
})
