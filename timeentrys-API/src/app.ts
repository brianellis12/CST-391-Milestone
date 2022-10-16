import express from 'express'; //Importing Express
import entriesRouter from './entries/entries.routes';
import logger from './middleware/logger.middleware'
import cors from 'cors';
import helmet from 'helmet';

require('dotenv').config();

const app = express(); //Create the variable app 
const port = 3000; //The port the api is published to



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) //Sending "Example app listening at http://localhost:3000" to the console
});

if(process.env.NODE_ENV == 'development') {
  //add logger middleware
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode');
}

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(helmet());

app.use('/', [entriesRouter]);