import 'dotenv/config';
import convict from 'convict';

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['development', 'production', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },
});

config.validate({ allowed: 'strict' });

export default config.getProperties();
