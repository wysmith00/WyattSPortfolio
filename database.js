import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Could not connect to MongoDB:", err.message);
        process.exit(1);  // Exit process with failure
    }
};

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const Contact = mongoose.model('Contact', contactSchema);

export { connectDB, Contact };
