export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number.
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const teachers = await Teacher.find().exec()
        callback(null, teachers)
    },
    getById(data, callback) {
        Teacher.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const teacher = new Teacher(data)
        teacher.save(callback)
    },  

    deleteOne:(data, callback) => {
        Teacher.findByIdAndRemove({
            _id: data.id
        }).exec(callback)
    },

    updateById: (data) => {
        Teacher.findByIdAndUpdate(data.params.id, {
            name: data.body.name, 
            address: data.body.address,
            email: data.body.email,
            salary: data.body.salary
        }, {new: true})
        .then(teacher => {
            if(!teacher) {
                return res.status(404).send({
                    message: "Data not found with id " + req.params.id
                });
            }
            res.send(teacher);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Data not found with id " + req.params.id
                });                
            }
        })
    }
}
