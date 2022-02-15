const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "back",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

db.connect(function (err) {
  if (err) throw err;
  console.log("connected!!");
});

app.get("/api/get", (req, res) =>{
    const sqlSelect =
     "select * from log";
    db.query(sqlSelect, (err, result) =>{
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {

    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const email = req.body.email;
    const project = req.body.project;
    const password = req.body.password;

const sqlInsert =
      "INSERT INTO log (first_name, second_name, email, project, password) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [firstName, secondName, email, project, password], (err,result) =>{
        console.log(result);
    })
});

app.delete('/api/delete/:id', (req,res) =>{
    const id = req.params.id;
    const sqlDelete = "Delete from log where id_data = ?";

    db.query(sqlDelete,id, (err,result) =>{
        if (err) console.log(err);
    } )
})

app.put('/api/update', (req,res) =>{

    const id = req.body.id;
    const project = req.body.newProject;

    const sqlUpdate = "update log set project = ?  where id_data = ?";

    db.query(sqlUpdate, [project, id],  (err,result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result); 
        }
            
        
    })
})


app.listen(3001, () => {
  console.log("listening to port 3001");
});
