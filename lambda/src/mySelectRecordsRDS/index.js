const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
    //following param coming from aws lambda env variable
    host: config.RDS_HOSTNAME,
    user: config.RDS_USERNAME,
    password: config.RDS_PASSWORD,
    port: config.RDS_PORT,
    database: config.DATABASE,
    //calling direct inside code
    connectionLimit: 10,
    multipleStatements: true,
    //prevent nested sql statements
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    debug: true
});


exports.handler = (event, context, callback) => {
    // TODO implement
    console.log("inside lambda ... " + event)
    // allows for using callbacks as finish/error-handlers
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = "SELECT * FROM " + config.TABLE;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(null, result)
    });
};
