var schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    salary: { type: Number, required: true },
    student: { type: Schema.Types.ObjectId, ref: "Student" }
})
export default mongoose.model("Teacher", schema)
