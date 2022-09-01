const mongoose = require("mongoose");

const Connection = async () => {
    const DB = `mongodb+srv://ankit:ankit@blog.shvff.mongodb.net/BLOG?retryWrites=true&w=majority`;
    // console.log(DB);
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = Connection;
