const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

app.post("/personalInformation", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const dob = req.body.dob;
  console.log(firstname, lastname, dob);
  console.log(typeof dob);
  sql = `SELECT * FROM PersonalInformation`;
  insert =
    "INSERT INTO `PersonalInformation` (`FirstName`, `LastName`, `DOB`) VALUES ?";
  values = [[firstname, lastname, dob]];
  console.log("insert");
  console.log(insert);
  db.query(insert, [values], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

app.listen(8081, () => {});
