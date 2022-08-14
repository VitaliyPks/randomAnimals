const express = require('express');
const config = require('./config/config');
const catApiRouter = require('./routes/cat.api.router');
const dogApiROuter = require('./routes/dog.api.router');
const foxApiRouter = require('./routes/fox.api.router');
const insultApiRouter = require('./routes/insult.api.router')

const app = express();

const port = process.env.PORT ?? 4000;

config(app);

app.use('/api/cat', catApiRouter);
app.use('/api/dog', dogApiROuter);
app.use('/api/fox', foxApiRouter);
app.use('/api/insult', insultApiRouter);

app.listen(port, () => {
  console.log(` Server started at ${port} port`);
});
