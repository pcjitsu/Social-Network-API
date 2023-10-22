const express = require('express')
const app = express()
const port = 3000;
const connection = require('./config/connection')

app.use(express.json())




connection.once('open', () =>{
app.listen(port, () => {
    console.log(`Application is listening on ${port}`)
}
)
}
)

