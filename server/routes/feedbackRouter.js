const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// ---- Feedback Router ---- //
// ---- GET ---- //
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM feedback;`;
    pool.query(queryText)
        .then(result => {
            console.log('result from db', result)
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in ROUTER.GET', error);
            res.sendStatus(5000);
        })
});

// ---- POST ---- //
router.post('/', (req, res) => {
    let feedback = req.body;
    let feeling = feedback.feeling
    let understanding = feedback.understanding
    let support = feedback.support
    let comments = feedback.comments
    console.log('POST feedback:', feedback);

    let queryText = `INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments" )
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling,
            feedback.understanding,
            feedback.support,
            feedback.comments
        ])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error in POST ROUTER`, error);
            res.sendStatus(500);
        });
});


module.exports = router;