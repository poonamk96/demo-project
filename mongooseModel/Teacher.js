var schema = new Schema({

    name: String,
    address: String,
    email: String,
    subject: String,
    salary: Number,
    student:{ type: Schema.Types.ObjectId, ref: 'Student' }
    
})
export default mongoose.model("Teacher", schema)
