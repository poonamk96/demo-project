var async = require("async")
export default {
    // doFunctinality function(user,callback){
    // console.log("I am ",user.name)
    // callback(null,null)
    // }
    // var checkEndOfUser = true
    // var page = 0
    // var limit = 20

    // async.whilst(
    // function(cb) {
    // cb(null, doFunctinality;
    // },
    // function(callback) {
    // async.waterfall([
    // function(callback{

    // },
    // function(users,callback){
    // async.each(users, (user,callback)){
    // doFunctinality
    // },
    // callback(){
    // return user < 10

    // }

    // doFunctinality = false

    async: function(data, callback) {
        const page = 1
        const limit = 5
        // async.whilst(
        async.waterfall(
            [
                function(callback) {
                    callback(null, data)
                },
                async function(data, callback) {
                    console.log("skip value -", page * limit - limit)
                    await Teacher.find()
                        .skip(page * limit - limit)
                        .limit(limit)
                        .exec(callback)
                    console.log("users", users)
                },
                function(users, callback) {
                    console.log("Users Data--", users)
                    async.each(users, function(user, callback) {
                        doFunctinality(user)
                    })
                }
            ],
            function(err, result) {
                // console.log(result)
                callback(null, result)
            }
        )
        // )
    }
}
function doFunctinality(users) {
    console.log(" hii I am " + users.name)
}
