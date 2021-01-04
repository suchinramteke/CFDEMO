const express = require("express")
var bodyParser = require('body-parser');
const app = express()
const db = require("./models")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// import routes file
var userRoutes = require('./routers/userRoutes');
var authRoutes = require('./routers/authRoutes')

// define path
app.use('/api/user', userRoutes); 
app.use('/api/auth', authRoutes); 


// To connect database 
db.sequelize.sync().then(() => {
    console.log("Connect Datatbase")

}).catch(err => {
    console.log("Not connected", err)
})

// for run server in specific port
app.listen(5000, () => {
    console.log(`Server running `);
});







