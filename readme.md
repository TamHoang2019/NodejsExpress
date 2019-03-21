1. create folder express
2. create sub folder 1-hello
3. npm init
4. install express

hello world
const express = require('express') 
1. require express 

const app = express()
2. tạo 1 app instace 
express() là 1 function trả về 1 app mới. 

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
hàm listen có 2 tham số: port và 1 cb 
call back này dc gọi khi server start rồi
# NodejsExpress
