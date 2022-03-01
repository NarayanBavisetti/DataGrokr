const express = require('express');
const app = express();
const PORT = 5000;
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database:"new_schema",
})


app.get("/",(req,res) => {
    const sqlInsert = "INSERT INTO userinfo (first_name, last_name, email_id ,mobile_no , account_no, ifsc_code) VALUES ('bavi' , 'setti' , 'nara@g.com', 554,2321,314134);";
    db.query(sqlInsert , (err,result ) => {
        res.send("kuch bhi");
    })

})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})