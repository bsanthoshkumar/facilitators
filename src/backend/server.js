const express = require("express");
const { Pool } = require("pg");
const setupTable = require("../migration/setupTable");
const datastore = require("../datastore/dataStore");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "facilitators",
  password: "postgres",
  port: 5432,
});
pool.connect();
setupTable(pool);

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/api/getMeetings", async (req, res) => {
  const selectQuery = `SELECT meeting as name FROM facilitators GROUP BY meeting;`;
  datastore
    .query(pool, selectQuery)
    .then((result) => res.json(result))
    .catch((e) => res.send(400, "Data not found"));
});

app.get("/api/getFacilitators", async (req, res) => {
  const query = `SELECT * FROM facilitators WHERE meeting='${req.query.meeting}';`;
  datastore
    .query(pool, query)
    .then((result) => res.json(result))
    .catch(() => res.send(400, "Facilitators not found"));
});

app.listen(8000, () => console.log("listening on port 8000..."));
