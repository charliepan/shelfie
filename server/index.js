require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const SC = require('./controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING
}).then(dbInstance =>{
    app.set('db',dbInstance);
}).catch(err => console.log(err));

app.get('/api/inventory', SC.getInventory);

app.listen(4000, ()=>{
    console.log(`Server is listening on ${SERVER_PORT}`);
});