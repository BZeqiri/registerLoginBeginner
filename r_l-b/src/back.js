const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    user:".",
    host:"localhost",
    password:"",
    database:"R_L",
});

app.post('/register', (req, res)=>{
    db.query("INSERT INTO R_L (username, password)VALUES (?,?)", [username, password], (err, result)=>{
        console.log(err);
    }
    );
});

app.listen(3000, ()=> {
    console.log("running server");
});