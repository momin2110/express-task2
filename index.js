const app = require('./app')

const port = 3001;
const hostName = '127.0.0.1';

app.use((req, res)=>{
    res.statusCode = 404;
    res.send("<h1>404 Error !!! Page not found</h1>");
    res.end()
})
app.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})

