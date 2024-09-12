function checkLogin(req, db) {
  const password_token = 'super-secret-f8ed84e8f41e4146403dd4a6bbcea5e418d24i7';
  const sqlQuery =
    "SELECT email FROM credentials WHERE " +
    "email = '" + req.body.email + "' AND " +
    "password = '" + req.body.password + "'";

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
