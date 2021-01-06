const express = require("express")
var bodyParser = require('body-parser');
const app = express()
const db = require("./models")
var cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
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
const port = 5000
app.listen(port, () => {
    console.log(`Server running `);
});







