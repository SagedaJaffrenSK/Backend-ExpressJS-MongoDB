import http from 'http';

const server = http.createServer((req, re) => {
    console.log(req.method);
    if(req.url==="/userDetails"){
        res.writeHead(200, ({"Contetnt-Type" : "UserDetails/json"}));
        res.end(JSON.stringify([{"name" : "Alice"}, {"RollId" : 101}, {"Email" : "Jaffren123@gmail.com"}]));
    }
    else if(req.url==="/userMarks"){
        res.writeHead(200, ({"Conetent-Type" : "UserMarks/json"}))
        res.end(JSON.stringify([{"English" : 85}, {"Maths" : 90}, {"Physics" : 95}]));
    }
    else{
        res.writeHead(200, ({"Content-Type" : "text/plain"}));
        re.end("Hello.., this response is from backend server");
    }
});

server.listen(7007, () => {
    console.log(`Server is running at port number ${7007}`);
});
