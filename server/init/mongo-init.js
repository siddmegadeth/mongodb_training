(function() {

    const options = {
        dbName: process.env.MONGODB_NAME
    };

    // dbName: process.env.MOBGODB_NAME


    mongoDbURI = module.exports = process.env.MONGODB_URI_PRODUCTION;
    log(mongoDbURI);
    log(process.env.MONGODB_NAME);

    (function() {


        MongoClient.connect(mongoDbURI, function(errConnection, connection) {

            connectionMongoSearch = module.exports = connection;
            dbo = module.exports = connectionMongoSearch.db(process.env.MONGODB_NAME);

        });

        mongoose.connect(mongoDbURI, options)
            .then(function(errDb, dbConnection) {
                console.log('Connection to ' + process.env.MONGODB_NAME + ' DEV DB/ Atlas Cluster is successful!');
                log(process.env.MONGODB_URI_PRODUCTION);
            })
            .catch((err) => console.error(err));

    })()

})()