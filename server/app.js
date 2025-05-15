const http = require('http');
const cors = require('cors'); 
const express = require("express"); 

const { profiles } = require("./constants/profiles")
const { wallets } = require("./constants/wallets");

// const bodyParser = require('body-parser')

const app = express(); 

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.use(cors()); 


// get ( read ), post ( create ), update ( put ( { name: "Bob" } , { name: "John" } ), patch ) )
// app.get()

app.get("/profiles", (req, res) => {

    console.log(req.body)

    res.json(profiles);
})

app.get("/wallets", (req, res, next) => {
    // console.log(req.body)

    // wallets.push(req.body)
    
    // const { wallet } = req.body;
    // wallets.push(wallet); 

    // res.writeHead(200, {
    //     "Content-Type": "application/json",
    // });

    return res.json(wallets);
})

app.post("/wallets", (req, res, next) => {
    // console.log(req.body)

    wallets.push(req.body)
    
    // const { wallet } = req.body;
    // wallets.push(wallet); 

    // res.writeHead(200, {
    //     "Content-Type": "application/json",
    // });

    return res.json(wallets);
})


const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server is running on the 3000 port");
})