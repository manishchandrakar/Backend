// backend/models/SubCategory.js
import mongoose from 'mongoose';

const SubCategorySchema = mongoose.Schema({
  categoryName: { type: String, required: true },
  subCategoryName: { type: String, required: true },
  productName: { type: String },
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

export default SubCategory;
