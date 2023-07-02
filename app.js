const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.statusCode = 200;
    res.send("<h1>Welcome to Home Page</h1>");
    res.end()
});

// REQUEST with json/form data inside body --> req.body.parameterName
app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.post('/register', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name} You are ${age}`);
})

// REQUEST with header --> req.header('key')

app.get('/header', (req, res)=>{
    const id = req.header('id');
    const name = req.header('name');
    res.statusCode = 200;
    res.send(`<h1>User's Name is : ${name} and ID is : ${id}</h1>`);
    res.end()
});

//  REQUEST with route parameter --> req.params.parameterName

// app.get('/params/userName/:name/userId/:id', (req, res)=>{
//     // const name = req.params.name;
//     // const id = req.params.id;
//     const {name, id} = req.params;
//     res.statusCode = 200;
//     res.send(`<h1>User's Name is : ${name} and ID is : ${id}</h1>`);
//     res.end()
// });

// REQUEST with query parameter --> req.query.parameterName

// app.get('/query', (req, res)=>{
//     // const name = req.query.name;
//     // const id = req.query.id;
//     const {name, id} = req.query;
//     res.statusCode = 200;
//     res.send(`<h1>Student's Name is : ${name} and ID is : ${id}</h1>`);
//     res.end()
// });

module.exports = app;