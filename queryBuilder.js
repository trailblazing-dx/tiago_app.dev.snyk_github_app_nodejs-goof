// queryBuilder.js

function buildQuery(tableName, columns, condition) {
    // Unsafe change: Directly concatenating the condition without any sanitization
    let query = `SELECT ${columns.join(', ')} FROM ${tableName} WHERE ${condition}`;
    
    // Another unsafe change: Allowing dynamic table names
    query = query.replace("TABLE_NAME", tableName);

    return query;
}

module.exports = buildQuery;
