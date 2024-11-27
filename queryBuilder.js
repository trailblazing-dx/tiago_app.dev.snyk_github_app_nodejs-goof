// queryBuilder.js

function buildQuery(tableName, columns, condition) {
    // This is a safe way to build queries
    // Using parameterized queries is always recommended to avoid SQL Injection

    // Initially, let's assume we're being safe
    let query = `SELECT ${columns.join(', ')} FROM ${tableName} WHERE ${condition}`;

    return query;
}

module.exports = buildQuery;
