const express = require('express');
 
var server = express();
server.use('/1.html', function (req, res) {  //请求路径为  http://localhost:8080/1.html
    //res.write('aaa');  //向前台写入aaa
    //res.send('aaa');  //向前台写入aaa
    res.send({ a: 12, b: 5 });   //向前台写入json数据
    res.end();
})
 
server.listen(8080); 
