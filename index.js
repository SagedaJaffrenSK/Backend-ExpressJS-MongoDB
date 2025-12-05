// import http from 'http';

// //creation of a server
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     if(req.url === "/users"){
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify({name: "Jaffren"}));
//     }
//     else{
//         res.writeHead(200, {"Content-Type" : "text/plain"});
//         res.end("Hello this is from backend");
//     } 
// });

// //start a server
// server.listen(7007, () => {
//     console.log(`Server running at port ${7007}`);
// });

import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.send("Hello this is from backend");
})
app.listen(7007, () => {
    console.log("Server is running at port 7007");
});