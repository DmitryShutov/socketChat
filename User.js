const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },  
});

const User = mongoose.model('User', userSchema);

module.exports = User;