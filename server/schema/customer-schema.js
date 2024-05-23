(function() {

    // Profile For Customer 
    CustomerSchema =  mongoose.Schema({
        customer_id :{
            type : String,
            unique : true,
            index : true,
        },
        fullname : {
            type : String
        },
        isProfileCreated :{
            type : Boolean,
            default : false
        },
        registeringFrom :{  // mobiles,webapps,desktop
            type : String,
            default : 'desktop',
            enum : ['desktop','webapps','mobiles']
        },
        email : {
           type : String,
           unique : true,
           index : true,
           required : true 
        },
        address : {
            type : String
        },
        mobile : {
            type : Number,
            unique : true,
            index: true,
            required : true
        }
    },{timestamps : true});



    CustomerSchema.pre("save",function(next){
        var now  =this;
        now.customer_id = now._id
        now.isProfileCreated = true;
        next();
    });


    // insert, update, findOne, find , findOneAndUpdate, updateMany , save
    // _id : unique identifier

    CustomerModel = module.exports = mongoose.model("CustomerModel", CustomerSchema);

})()