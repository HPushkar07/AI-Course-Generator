/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./config/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://aidb_owner:uFtef63iamlq@ep-still-term-a159obv0.ap-southeast-1.aws.neon.tech/aidb?sslmode=require',
    }
  };