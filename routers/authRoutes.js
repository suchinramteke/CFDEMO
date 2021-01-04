var express = require('express');
var router = express.Router();
const db = require("../models")

router.post("/", (req, res) => {
    db.User.findAll({
        where:
        {
            firstName: req.body.firstName,
            email: req.body.email
        }
    }).then(result => {
        if (result.length == 0) {
            res.json({ "message": "User is not found " })
        }
        else {
            res.json({ "data": result })
        }

    }).catch(error => {
        res.json({ "error": error })
    })
})

module.exports = router;