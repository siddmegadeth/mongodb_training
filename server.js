(function() {
    require('dotenv').config()
    require("./server/index");
    require("./ejs/index");

    http.listen(process.env.PORT || app.get("PORT"), function(req, resp) {
        log("*******************************************************************************");
        log("MONGODB TRAINING Server Started : PORT : " + app.get("PORT") || process.env.PORT);
        log("*******************************************************************************");

    });

})()

//var productionLink = 'https://gethike-app.herokuapp.com';