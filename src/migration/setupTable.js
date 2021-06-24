const datastore = require("../datastore/dataStore");

const setupTable = (pool) => {
  const query = `CREATE TABLE IF NOT EXISTS facilitators(id SERIAL, name VARCHAR, status VARCHAR check (status in ('DONE', 'NOTDONE', 'INPROGESS')));`;
  const insertQuery = `INSERT INTO facilitators(name, status) VALUES('santhosh', 'DONE'),('kumar', 'NOTDONE'),('someone', 'INPROGRESS'),('anyone', 'DONE');`;

  datastore
    .query(pool, query)
    .then(() => console.log("Table create successfully"))
    .catch(() => console.log("Fail to create table"));
};

module.exports = setupTable;
