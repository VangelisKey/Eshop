const express = require('express');
const mysql = require("mysql");
const dotenv = require('dotenv');
const app = express();

//configure the Express server to receive the form values as JSON
const bcrypt = require("bcryptjs")
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

dotenv.config({ path: './.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_ROOT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

app.use(express.static("./public"))

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

app.set('view engine', 'hbs')

/*app.get("/", (req, res) => {
    res.render("index")
})

app.get("/register", (req, res) => {
    res.render("register")
})*/



class User {
    constructor(id=0, username='', password='', verifyPassword='') {
      this.id = id;
      this.username = username;
      this.password = password;
      this.verifyPassword = verifyPassword;
    }
  }

  var newUser = new User();

app.get('/register', function (req, res) {
    res.json(newUser);
  })

app.post('/register', (req, res) => {

    db.query('SELECT username FROM users WHERE username = ?', newUser.username, async (error, res) => {
        console.log(newUser.username)
        if(error){
            console.log(error)
        }
        
        if( res.length > 0 ) {
            console.log(2)
            return res.render('/register', {
                message: 'This username is already in use !'
            })
        } else if(password !== password_confirm) {
            console.log(3)
            return res.render('/register', {
                message: 'Passwords do not match!'
            })
        }

        //registration goes through
        let hashedPassword = await bcrypt.hash(newUser.password, 8)
        console.log(newUser.username)
        db.query('INSERT INTO users (username, password)', (newUser.username, hashedPassword), (error, res) => {
            if(error) {
                console.log(error)
            } else {
                return res.render('/register', {
                    message: 'User registered!'
                })
            }
        })

     })
})

app.listen(5000, ()=> {
    console.log("server started on port 5000")
})