import express from "express";
import dotenv from 'dotenv';

dotenv.config()
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("welcome to the server")
})

app.get('/shubham', (req, res) => {
    res.send("<h1> My name is shubham </h1>")
})

app.get('/github', (req, res) => {
    res.send("<h1><a href=\"https://github.com/shubhamxpawar\"> Github </a> </h1>")
})

app.listen(process.env.PORT, () => {console.log(`server started on port ${process.env.PORT}`)})