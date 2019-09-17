export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const students = await Student.find()
        //.populate("teacher","-address")
        Student.aggregate([
            { $lookup:
                {
                    from: "teachers",
                    localField: "teacher",
                    foreignField: "_id",
                    as: "teacher"
                }
            }
        ]).exec(callback)
        //.exec()
        //callback(null, students)
        

    },

    getOne(data, callback) {

        Student.findOne({
            _id: data.id
            
         
        })
        // .populate("teacher")
        //.exec(callback)
        Student.aggregate([
            {
                $match: {_id:ObjectId(data.id)} 
            },
            { $lookup:
            {
                from: "teachers",
                localField: "teacher",
                foreignField: "_id",
                as: "teacher"
            }
            }
        ]).exec(callback)
        

    },

        
   
    saveData: (data, callback) => {
        const student = new Student(data)
        student.save(callback)
    }
}
