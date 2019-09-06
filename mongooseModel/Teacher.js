var schema = new Schema({

    name: String,
    address: String,
    email: String,
    salary: Number
    
})
export default mongoose.model("Teacher", schema)
