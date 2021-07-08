const express = require('express');
const http = require('http');

// run with npm run start

const app = express();

// index 
app.get('/', (_, res) => {
    res.send("Hello, world");
});

// xxx 입니다
// 단순 응답 정도 이면 아래와 깉이 하는 게 좋아 보인다.
// 특정 개체를 다루어야 한다면 나누는 게 좋지만
app.get('/:name', (req, res) => {
    res.send(req.params.name + " 입니다.");
});

const server = http.createServer(app);
const port = process.env.PORT || 80;

server.listen(port, _ => {
    console.log("application started at : " + port);
})