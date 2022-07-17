require('dotenv').config()

// this config should change based if we're in dev or production as long as env vars for both are configured correctly

export default {
  port: 4001,
  host: "localhost",
  dbUri: process.env.MONGO_URI,
};
