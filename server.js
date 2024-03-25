


const express = require("express");
const app = express();

app.use(express.static("."));

app.get("/prices", function(req, res){
    const prices = {
        newShirts: "$35.00",
        BestSellers: "$25.00"
    };
    res.json(prices);
})



app.listen(3000, () =>{
    console.log("Listening on port 3000");
})