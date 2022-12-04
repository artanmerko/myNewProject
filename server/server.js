const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors')

app.use(cors())

require('./routes/person.routes')(app);
// We're importing the routes export.
/* These two lines are the long-hand notation of the above code, to better illustrate what's going on: */
/* const personRoutes = require("./routes/person.routes"); */
/* personRoutes(app); */

app.listen(port,()=>console.log(`Listening on port: ${port}`))