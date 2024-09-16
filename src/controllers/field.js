import Field from '../model/field.js';
import { formatData, validateData } from '../service/feilds.js';

export async function getFields(req, res) {
  const { type } = req.query;
  try {
    const fields = await Field.find({ ...(type ? { type } : {}) });
    res.status(200).json({
      success: true,
      message: 'Data fetched successfully.',
      items: fields,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({
      success: false,
      message: 'Some Error occurred while fetching data.',
    });
  }
}

export async function createField(req, res) {
  try {
    validateData(req.body, true);
    const newField = formatData(req.body, true);
    const field = await Field.create(newField);
    res.status(200).json({
      success: true,
      message: 'Field created successfully.',
      item: field,
    });
  } catch (error) {
    console.error('Error adding Field:', error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
}

export async function updateField(req, res) {
  try {
    const id = req.params?.id;

    validateData(req.body);
    const formattedData = formatData(req.body);

    const doc = await Field.findById(id).exec();

    const newDoc = {
      originalName: doc.originalName,
      type: doc.type,
      name: formattedData.name,
    };

    const updatedCriterion = await Field.replaceOne({ _id: id }, newDoc);

    res.status(200).json({
      success: true,
      message: 'Field updated successfully.',
      item: updatedCriterion,
    });
  } catch (error) {
    console.error('Error updating Field:', error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
}
