const express = require ("express")
const petsRouter = require("./routes/pets.router.js")

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/pets", petsRouter)






app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})