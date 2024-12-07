// backend/controllers/subCategoryController.js
// import SubCategory from '../models/subCategoryModel';

// Create Sub-category
export const createSubCategory = async (req, res) => {
  try {
    const {  subCategoryName, productName } = req.body;

    const subCategory = await SubCategory.create({
      
      subCategoryName,
      productName,
    });

    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Sub-categories
export const getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({});
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Sub-category
export const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);

    if (subCategory) {
      subCategory.categoryName = req.body.categoryName || subCategory.categoryName;
      subCategory.subCategoryName = req.body.subCategoryName || subCategory.subCategoryName;
      subCategory.productName = req.body.productName || subCategory.productName;

      const updatedSubCategory = await subCategory.save();
      res.status(200).json(updatedSubCategory);
    } else {
      res.status(404).json({ message: 'Sub-category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Sub-category
export const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);

    if (subCategory) {
      await subCategory.remove();
      res.status(200).json({ message: 'Sub-category deleted' });
    } else {
      res.status(404).json({ message: 'Sub-category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
