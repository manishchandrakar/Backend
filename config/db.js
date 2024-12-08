// backend/config/db.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const dbURI = 'mongodb://localhost:27017/yourDatabase';  // Replace with your MongoDB URI
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,  // 30 seconds timeout
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
  }
};

export default connectToDatabase;
