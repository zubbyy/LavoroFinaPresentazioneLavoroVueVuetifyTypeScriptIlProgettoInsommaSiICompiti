// https://www.kindsonthegenius.com/build-a-rest-api-with-node-js-and-postgresql-get-post-putdelete-step-by-step/
// http://localhost:3300/users/2
const client = require('../connection.js')
const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())



app.listen(3300, () => {
    console.log("Sever is now listening at port 3300");
})



const bodyParser = require("body-parser");
app.use(bodyParser.json());


client.connect();

app.get('/users', (req, res) => {
    client.query(`Select * from users`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.log("ERROR! " + err.message);
        }
    });
    client.end;
})

app.get('/users/:id', (req, res) => {
    client.query(`Select * from users where id=${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.log("ERROR! " + err.message);
        }
    });
    client.end;
})

app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user)
    let insertQuery = `
    insert into users(id, firstname, lastname, promosso) 
    values(
        DEFAULT, 
        '${user.firstname}', 
        '${user.lastname}', 
        '${user.promosso}'
    )`

    console.log(insertQuery)
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful')
        } else { console.log("ERROR!" + err.message) }
    })
    client.end;
})

app.put('/users/:id', (req, res) => {
    let user = req.body;
    let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       promosso = '${user.promosso}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful')
        } else { console.log(err.message) }
    })
    client.end;
})

app.delete('/users/:id', (req, res) => {
    let user = req.body;
    let deleteQuery = `delete from users where id = ${req.params.id}`

    client.query(deleteQuery, (err, result) => {
        if (!err) {
            res.send('Delete was successful')
        } else { "ERR0R!" + console.log(err.message) }
    })
    client.end
})