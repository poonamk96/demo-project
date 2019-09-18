export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number.
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const teachers = await Teacher.find({}).exec()
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

    deleteOne: (data, callback) => {
        Teacher.findByIdAndRemove({
            _id: data.id
        }).exec(callback)
    },

    updateById: (data, callback) => {
        Teacher.findByIdAndUpdate(data.params.id, data.body).exec(callback)
    },

    pagination: async function(data, callback) {
        const resPerPage = 2
        const page = data.params.page

        const teacher = await Teacher.find()
            .skip(resPerPage * page - resPerPage)
            .limit(resPerPage)
            .exec()
        callback(null, teacher)
    }
}
