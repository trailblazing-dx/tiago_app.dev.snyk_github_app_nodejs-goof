function checkLogin(req, db) {
  const sqlQuery =
    "SELECT email FROM credentials WHERE " +
    "email = ? AND " +
    "password = ?";

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
