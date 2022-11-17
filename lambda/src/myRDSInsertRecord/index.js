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
    console.log("inside lambda ... " + event.filename)
    // allows for using callbacks as finish/error-handlers
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = "INSERT INTO " + config.TABLE + "(filename, user_email, " +
                                                "user_firstname, user_lastname, " +
                                                "upload_time, update_time, " +
                                                "description, download_link, version) VALUES( '" + 
                                                event.filename + "', '" + 
                                                event.user_email + "', '" +  
                                                event.user_firstname + "', '" + 
                                                event.user_lastname + "', '" + 
                                                event.upload_time + "', '" + 
                                                event.update_time + "', '" + 
                                                event.description + "', '" + 
                                                event.download_link + "', " + 
                                                event.version + ");";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(null, result)
    });
};
