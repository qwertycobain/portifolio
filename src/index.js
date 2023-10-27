const express = require('express')


const app = express();


app.get('/courses',(req, res)=>{
    return res.json(["curso1","curso2","curso3"])
})

app.post('/courses', (req, res)=>{
    return res.json("lalala")
})

app.put('/courses/:id', (req, res)=>{
    const params = req.params
    console.log(params)
    return res.send("lalala", params )

})

app.patch('/courses/:id', (req, res)=>{
    return res.json(["curso1", "curso2"])
})

app.delete("/courses/:id", (req, res)=>{
    return res.json(['curso1', 'curso2'])
})




app.listen(3000,()=> console.log("Deus abencoe a america"))

