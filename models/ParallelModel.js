var async = require('async');
const _ = require("lodash");
export default {
search:  function(_query, callback) 
    {
 
        async.parallel(
            {
            student: async function(callback) {
                
                const student = await Student.find().exec()
                
                callback(null,student);
                
            }, 
            
            teacher: async function(callback) {
                const teacher = await Teacher.find().exec()
                
                callback(null,teacher);
            }},
            function(err,results){
                console.log("final result :",results);
                callback(null,results)
                }
        )
    },

    searchByWaterFall(data, callback) {
        async.waterfall(
            [
                function(callback) {
                    callback(null, data.id)
                },
                function(studentId, callback) {
                    const student = Student.findOne({
                        _id: studentId
                    }).exec(callback)
                },
                function(student, callback) {
                    console.log("teacherId-", student.teacher)
 
                    const teacher = Teacher.findOne({
                        _id: student.teacher
                    }).exec(callback)
 
                    //  callback(null, course)
                }
            ],
            function(err, result) {
                // result now equals to 'Task1 and Task2 completed'
                console.log(result)
                callback(null, result)
            }
        )
    },

    lodashOperations(_query, callback) {
        async.waterfall(
            [
                function(callback) {
                    callback(null, _query)
                },
                async function(_query, callback) {
                    const student = await Student.find().exec(callback)
                }
                ,
                function(student, callback) {
                    console.log("student-", student)
                    
                    let chunk = _.chunk(student, 2);
                    console.log(chunk);

                    let slice = _.slice(student, 2, 4);
                    console.log(slice);

                    student.forEach( (e) => {

                        if (_.isNumber(e)) {
                            console.log(`${e} is a number`);
                        }
                    
                        if (_.isString(e)) {
                            console.log(JSON.stringify(e) + ' is a string');
                        }
                    
                        if (_.isArray(e)) {
                            console.log(JSON.stringify(e) + ' is an array');
                        }
                    
                        if (_.isObject(e)) {
                            console.log(JSON.stringify(e) + ' is an object');
                        }
                    
                    });

                        const keys = _.keys(student);
                        console.log(keys);
                        var a,b;
                        const values = _.values(student);
                        console.log(values);
                        const result = "keys :"+keys+ " values :"+values;
                        //callback(null, chunk)
                        callback(null, result)
                    
                }
            ],
            function(err, result) {
                // result now equals to 'Task1 and Task2 completed'
                console.log(result)
                callback(null, result)
            }
        )
    }

}