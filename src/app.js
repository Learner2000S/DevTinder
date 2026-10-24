const express = require("express");

const app = express()




/// here we can skip between a and c in the url, so it will match /ac and /abc
app.get(/^\/ab?c$/, (req, res) => {
    res.send("Hello from ");
});

//here we can add any number of characters between a and c in the url, so it will match /ac, /abc, /abbc, /abbbc, etc
app.get("/ab*c",(req, res) => {
    res.send("Hello from user route **")
})

//This will use query parameters to get the data from the url, so it will match /user?name=John&age=30
app.get("/user",(req, res) => {
    console.log(req.query)
    res.send("Hello from user route +")
})

//this will dynamically get the userId from the url, so it will match /user/123, /user/abc, etc
app.get("/user/:userId/:userName/:password",(req, res) => {
    console.log(req.params)
    res.send("Hello from user route +")
})



app.get("/user",(req, res) => {
    res.send({ firstName: "John", lastName: "Doe" })
})

app.post("/user",(req, res) => {
    //saving data to database
    res.send("Data saved successfully")
})


// This will match all the http methods API calls to /hello
app.use("/hello",(req, res) => {
    res.send("Hello from server 345")
})




app.listen(3000, ()=>{
    console.log("server is listening  on port 3000")
});
 