import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    subCategoryName: { type: String, required: true },
    productName: { type: String }, // Optional
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;
