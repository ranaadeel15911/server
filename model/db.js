let mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://sharjeelakhtar245:sharjeel3322@cluster0.ssd7alz.mongodb.net/yourDatabaseName';

try {
    let connect = mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("db connected");
} catch (e) {
    console.log("Error connecting to MongoDB:", e);
}
