const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Caccona*11",
    database: "postgres"
})

module.exports = client