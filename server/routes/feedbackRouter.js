const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


// ---- Feedback Router ---- //


// ---- GET ---- //
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM feedback;`;
    pool.query(queryText)
    .then(result => {
       console.log('result from db', result )
    res.send(result.rows);
    })
    .catch(error => {
        console.log('error in ROUTER.GET', error);
        res.sendStatus(5000);
    })
});



// ---- POST ---- //
    // router.post HERE


module.exports = router;