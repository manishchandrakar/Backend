import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true, // Removes leading/trailing spaces
    },
    subCategoryName: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensures sub-category names are unique
    },
    productName: {
      type: String,
      trim: true, // Optional but ensures clean input
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Index to optimize queries for subCategoryName
const SubCategory =
  mongoose.models.SubCategory || mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;
