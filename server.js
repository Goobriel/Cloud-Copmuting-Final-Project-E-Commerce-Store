
/////////////// CONNECTING TO DATABASE (PostGres) ////////////////////

const express = require("express");
const Pool = require('pg').Pool
const bodyParser = require("body-parser")
const app = express();

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}));


const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'postgres',
   password: 'postgres',
   port: 5432,
})

app.get("/prices", function(req, res){
    const prices = {
        newShirts: "$35.00",
        BestSellers: "$25.00"
    };
    res.json(prices);
})

app.get("/api/product", (req, res) => {

   const sql = "SELECT * FROM product";

   pool.query(sql, (error, results) => {

        if (error) throw error

        res.status(200).json(results.rows)
   })
});

app.post("/api/users/create", (req, res) => {

    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // Add here the sql

    const sql = "INSERT INTO users (password, email, username) VALUES ($1,$2,$3)";

    const data = [password, email, username];

    pool.query(sql, data, (error, results) => {
        if (error) throw error
        
        res.status(200).json(results.row)
    });
});

app.post("/api/contactform/create", (req, res) => {

    console.log(req.body);

    const name = req.body.name;
    const phonenum = req.body.phonenum;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    // Add here the sql

    const sql = "INSERT INTO contactform (name, phonenum, email, subject, message) VALUES ($1,$2,$3,$4,$5)";

    const data = [name, phonenum, email, subject, message];

    pool.query(sql, data, (error, results) => {
        if (error) throw error
        
        res.status(200).json(results.row)
    });
});

    //res.status(200).send("ok"); // <---- remove this line

 


app.listen(3000, () => {
   console.log("Listening on port 3000");
});
