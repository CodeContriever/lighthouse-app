import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: 'guest'
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    cPassword: {
        type: String,
    },
    image: {
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg'
    },

}, { timestamps: true})
// export default mongoose.models.users || mongoose.model('users', userSchema)
let Dataset = mongoose.models.users || mongoose.model('users', userSchema)
export default Dataset;