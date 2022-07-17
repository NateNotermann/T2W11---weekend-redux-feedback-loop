const express = require('express');
const app = express();
const bodyParser = require('body-parser');

    //  --- import feedback router --- //  
const feedback = require('./routes/feedbackRouter');

const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
    // ---- Added feedback router ---- //
app.use('/feedback', feedback)

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
}); 