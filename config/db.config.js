const mongoose = require('mongoose')
require('dotenv/config')

/**
 * Db server connection
 */
const URI = process.env. MY_DB
 mongoose.connect(URI, (err) => {
    if(err){
        console.log("DB Not Connected");
    } else
    console.log("DB Connected Successfully");
});

module.exports = mongoose;
