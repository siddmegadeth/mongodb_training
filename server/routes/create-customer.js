(function() {


    // app.use(function(incoming,value,next){
    //     // peform validation of URL params

    //     next();
    // });

    app.all("/create/customer/profile", function(req, resp) {
        log("/create/customer/profile");
        var email = req.body.email || req.params.email || req.query.email;
        var mobile = req.body.mobile || req.params.mobile || req.query.mobile;
        var fullname = req.body.fullname || req.params.fullname || req.query.fullname;
        var address = req.body.address || req.params.address || req.query.address;

        mobile = parseInt(mobile);
        log('Email : ' + email);
        log('Mobile : ' + mobile);
        log(typeof(mobile));
        if (email.length!=0 && typeof(mobile)=='number') {
            // { email: email, mobile: mobile }

            CustomerModel.findOne({
                $or: [
                    { email: email },
                    { mobile: mobile }
                ]
            }, function(errFound, found) {

                if (errFound) {
                    resp.send({ status: false, message: 'Error Occured Finding Customer Profile', data: errFound });
                }

                if (found) {
                    resp.send({ status: true, message: 'Customer Profile Already Exist', data: [] });
                } else {

                    var tuple = new CustomerModel({
                        fullname: fullname || 'Default Value',
                        email: email,
                        mobile: mobile,
                        address : address || 'Default Some Value'
                    });

                    tuple.save(function(errSave, saved) {
                        if (errSave) {
                            resp.send({ status: false, message: 'Error Occured Saving Customer Profile', data: errSave });
                        }
                        resp.send({ status: true, message: 'Successfully Created New User Customer Profile', data: saved })
                    });
                }
            });

        } else {
            resp.send({ status: false, message: 'Params Arr Empty', data: [] });
        }

    });


})();



