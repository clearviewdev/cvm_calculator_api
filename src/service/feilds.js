import { POLICY_NAMES } from '../constants/policy.js';
import { FieldOriginalName } from '../constants/field.js';

export function validateData(data, isCreate) {
  if (isCreate) {
    if (!data.name) {
      throw new Error('Field name must be provided.');
    }

    if (data.type !== 'admin' && data.type !== 'form') {
      throw new Error('Field type must be "admin" or "form".');
    }

    if (!data.originalName) {
      throw new Error('Field originalName must be provided.');
    }

    if (
      data.type === 'admin' &&
      !Object.values(POLICY_NAMES).includes(data.originalName)
    ) {
      throw new Error('Field originalName must be a valid policy name.');
    }

    if (
      data.type === 'form' &&
      !FieldOriginalName.includes(data.originalName)
    ) {
      throw new Error('Field originalName must be a valid Form field name.');
    }
  }
}

export function formatData(data, isCreate) {
  const formattedData = {};
  if (isCreate) {
    formattedData.originalName = data.originalName;
    formattedData.type = data.type;
  }
  formattedData.name = data.name;

  return formattedData;
}
