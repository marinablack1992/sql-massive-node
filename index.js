const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./products_controller.js')

const app = express();

app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)})

app.get('/api/products', ctrl.getAll);
app.get('/api/product/:id', ctrl.getOne);
app.put('/api/product/:id', ctrl.update);
app.post('/api/product/', ctrl.create);
app.delete('/api/product/:id', ctrl.delete);







const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`I'm listening on ${port}`)
})