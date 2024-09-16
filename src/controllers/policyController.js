import { formatData, validateData } from '../service/policyService.js';
import Criterion from '../model/criterionSchema.js';
import { FIELD_REQUIRED } from '../constants/policy.js';
import Field from '../model/field.js';

export async function getPolicy(req, res) {
  try {
    const criterion = await Criterion.find().populate('field');
    res.status(200).json({
      success: true,
      message: 'Data fetched successfully.',
      items: criterion,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({
      success: false,
      message: 'Some Error occurred while fetching data.',
    });
  }
}

export async function createPolicy(req, res) {
  try {
    validateData(req.body, true);
    const newCriterion = formatData(req.body, true);
    if (FIELD_REQUIRED.includes(newCriterion.name)) {
      const field = await Field.findOne({
        originalName: newCriterion.name,
      }).exec();
      console.log('FFFFF', field);
      if (!field) throw new Error('No Field found. Field required.');
      newCriterion.field = field._id;
    }
    const criterion = await Criterion.create(newCriterion);
    res.status(200).json({
      success: true,
      message: 'Policy created successfully.',
      item: criterion,
    });
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
}

export async function updatePolicy(req, res) {
  try {
    const id = req.params?.id;
    validateData(req.body);
    const formattedData = formatData(req.body, true);
    const updatedCriterion = await Criterion.findByIdAndUpdate(
      id,
      formattedData,
      { returnDocument: 'after' }
    );
    res.status(200).json({
      success: true,
      message: 'Policy updated successfully.',
      item: updatedCriterion,
    });
  } catch (error) {
    console.error('Error updating policy:', error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
}

export async function deletePolicy(req, res) {
  try {
    const id = req.params?.id;
    await Criterion.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Policy deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting Policy:', error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
}
