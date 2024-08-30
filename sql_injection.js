// validates if input email and password are correct
function checkLogin(req, db) {
  const sqlQuery =
    "SELECT email FROM credentials WHERE " +
    "email = ? AND " +
    "password = ?";

  db.query(sqlQuery, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      return false;
    }

    return result.length !== 0;
  });
}

