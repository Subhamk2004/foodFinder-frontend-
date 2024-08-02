import mongoose from 'mongoose';

let UserSchema = mongoose.Schema({
    firstname:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    lastName: mongoose.Schema.Types.String,
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    }, 
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    location: {
        type: mongoose.Schema.Types.String,
        required: true
    }
})

let User = mongoose.model('User',UserSchema);
export default User;

// this schema is the format of what data is expected
// check validationSchemas for how to validate each property of the fields of this schema