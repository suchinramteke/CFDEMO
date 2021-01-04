var express = require('express');
var router = express.Router();
const db = require("../models")

// Retrive information For All User table
router.get("/", (req, res) => {
    db.User.findAll({}).then(result => {
        res.json({ "data": result })
    }).catch(error => {
        res.json({ "error": error })
    })
})

// Retrive specific user
router.get("/:id", (req, res) => {
    db.User.findAll({where:{id:req.params.id}}).then(result => {
        res.json({ "data": result })
    }).catch(error => {
        res.json({ "error": error })
    })
})

// Create user
router.post("/", (req, res) => {
    db.User.create(req.body).then(result => {
        res.json({ "data": result, "message": "User created Sucessfully" })
    }).catch(error => {
        res.json({ "error": error })
    })

})

// Update User
router.put("/", (req, res) => {
    console.log(req.body)
    db.User.update(req.body, { where: { id: req.body.id } }).then(result => {
        res.json({ "data": result, "message": "User updated Sucessfully" })
    }).catch(error => {
        res.json({ "error": error })
    })
})

// Delete user
router.delete("/:id", (req, res) => {
    db.User.destroy({ where: { id: req.body.id } }).then(result => {
        res.json({ "message": "User deleted Sucessfully" })
    }).catch(error => {
        res.json({ "error": error })
    })
})



module.exports = router;