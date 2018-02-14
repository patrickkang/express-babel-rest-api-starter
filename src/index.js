import app from './app';
import config from './config';

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port} with ${config.env} environment`);
});

export default app;