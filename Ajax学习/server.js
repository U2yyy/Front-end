const express = require('express');

const app = express();

app.get('/server',(require,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send("Hello Ajax");
})

app.post('/server',(require,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send("Hello Ajax");
})

app.all('/json-server',(require,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    const date = {
        name:'Hello World'
    };
    let str = JSON.stringify(date);
    response.send(str);
})

app.listen(8000,()=>{
    console.log("8000端口监听中...");
})