(function() {

    // set and define public accessible assets such as css/images/files from js
    app.use(express.static("cdn/css"));
    app.use(express.static("cdn/img"));
    app.use(express.static("cdn/js"));
    app.use(express.static("cdn/lib"));
    app.use(express.static("cdn/scripts"));
    app.use(express.static("cdn/vendor"));

    // mapping for EJS to website Object 
    app.use(expressLayoutsWebsite);
    app.set('view engine', 'ejs');
    app.set("views", "views");

    
    app.get('*',function(req, res, next){

         res.locals = { req: req };
        next();
    });




})()