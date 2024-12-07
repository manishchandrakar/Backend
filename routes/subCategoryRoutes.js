// backend/routes/subcategories.js
import express from 'express';
import {
  createSubCategory,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
} from '../controllers/subCategoryController.js';

const router = express.Router();

router.post('/api/subcategories', createSubCategory);
router.get('/api/subcategories', getSubCategories);
router.put('/api/subcategories/:id', updateSubCategory);
router.delete('/api/subcategories/:id', deleteSubCategory);

export default router;
