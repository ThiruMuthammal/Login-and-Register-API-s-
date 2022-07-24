const express = require('express');
const dbconfig = require('./config/db.config');
const cors = require('cors')

const auth = require('./middlewares/auth');
const errors = require('./middlewares/errors');

const unless = require('express-unless');

const app = express();



// auth.authenticateToken.unless = unless;

// app.use(
//     auth.authenticateToken.unless({
//         path:[
//             {url: "/users/register", methods: ["POST"]},
//             {url: "/users/login", methods: ["POST"]},
            
//         ], 
//     })
// );

app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
// app.options('*', cors());
app.use(express.json());

app.use("/users", require("./routes/users.routes"));

app.use(errors.errorHandler);

/**
 * Localhost
 */
const PORT = process.env.PORT || 8080

app.listen(PORT, dbconfig, () => {
    console.log('Server running on port:',PORT);
})