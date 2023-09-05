const express = require('express')



const app= express();


app.get('/',(req, res)=>{
    return res.json({message: "la cocaina cocaina "})
})

app.listen(3000,()=> console.log("La cocaïna, la cocaïna a pris ma famille"))

