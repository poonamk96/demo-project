var schema = new Schema({
    name: String,
    email: String,
    subject: String,
   teacher:{ type: Schema.Types.ObjectId, ref: 'Teacher' }
})
export default mongoose.model("Student", schema)
