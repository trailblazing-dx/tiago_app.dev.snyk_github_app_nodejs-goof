const Utils = require("./utils")

function checkLogin(req, db) {
  const sqlQuery = Utils.getQuery(req);

    doQuery(sqlQuery, [])
}

function doQuery(query, args) {
  db.query(query, args, (err, result) => {
    if (err) {
      return false;
    }

    return result.length !== 0;
  });
}
