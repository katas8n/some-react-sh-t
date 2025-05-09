const http = require('http');
const cors = require('cors'); 
const express = require("express"); 

const app = express(); 

app.use(cors()); 

app.get("/people", (req, res, next) => {
    return res.json([
        {
            name: "John Doe", 
        }
    ])
})

app.get("/books", (req, res, next) => {
    return res.json([
        {
            id: 1,
            title: "Harry Potter", 
            description: "There is description regarding Harry Potter",
            imgSrc: "https://static.posters.cz/image/1300/104639.jpg",
            price: 23,
        },
        {
            id: 2,
            title: "The boy in the striped pyjamas", 
            description: "There is description regarding The boy in the striped pyjamas",
            imgSrc: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p187089_p_v8_an.jpg",
            price: 13,
        },
    ])
})


const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server is running on the 3000 port");
})