(function() {


    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        next();
    });


    // parse application/json
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(cors());

    app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 100000 }));
    app.set("PORT", process.env.PORT_NUMBER_SERVER || process.env.PORT);



})()