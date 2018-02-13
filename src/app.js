import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import httpStatus from 'http-status';
import config from './config';

const app = express();

if (config.env === 'development') {
  app.use(morgan('dev'));
}

// Help secure Express apps with various HTTP headers
app.use(helmet());

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendStatus(httpStatus.OK);
});

app.get('/health', (req, res) => {
  res.sendStatus(httpStatus.OK);
});

export default app;
