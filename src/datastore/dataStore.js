const query = (pool, query) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result.rows);
    });
  });
};

module.exports = { query };
