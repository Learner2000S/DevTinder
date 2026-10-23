const express = require("express");

const app = express()

app.use("/hello",(req, res) => {
    res.send("Hello from server 345")
})

app.use("/test",(req, res) => {
    res.send("Hello from server test")
})

app.listen(3000, ()=>{
    console.log("server is listening  on port 3000")
});
 