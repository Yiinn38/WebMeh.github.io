
let nombre = "Hola Mundo";
console.log(nombre);

const express = require('express');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use(require('./routes/productos'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


/*
    se ejecuta con:
    nodemon index.js
    node index.js
*/