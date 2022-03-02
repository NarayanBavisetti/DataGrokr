const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const PORT = 5000;
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "new_schema",
});

app.post("/api/insert", (req, res) => {
  const { first_name, last_name, email_id, mobile_no, account_no, ifsc_code } = req.body;
  const sqlInsert = "INSERT INTO userinfo (first_name, last_name, email_id ,mobile_no , account_no, ifsc_code) VALUES (?,?,?,?,?,?)";
  db.query( sqlInsert, [first_name, last_name, email_id, mobile_no, account_no, ifsc_code],
    (err, result) => {
      res.send("Hello");
      console.log("added successfully");
    }
  );
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
