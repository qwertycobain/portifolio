const express = require('express')


const {v4: uuidv4, v4} = require('uuid')

const app = express()
app.use(express.json())
const costumers = []

const port = 4000 


app.post('/conta',(request, response )=>{
    const {cpf, name } = request.body 

    const id = uuidv4()

    console.log(id)
    return response.status(200).send("OK")


})

app.listen(port, () =>{
    console.log ("ready to rumble! ==>>", + port)
})