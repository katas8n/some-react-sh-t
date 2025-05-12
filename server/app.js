const http = require('http');
const cors = require('cors'); 
const express = require("express"); 

const app = express(); 

app.use(cors()); 


// get ( read ), post ( create ), update ( put ( { name: "Bob" } , { name: "John" } ), patch ) )
// app.get()

// app.get()


const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server is running on the 3000 port");
})