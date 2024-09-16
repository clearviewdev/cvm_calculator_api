import { Schema, model } from 'mongoose';
import { POLICY_NAMES } from '../constants/policy.js';

const fieldSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Field name is required.'],
      immutable: true,
    },
    originalName: {
      type: String,
      required: [true, 'Field originalName is required.'],
      immutable: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['admin', 'form'],
    },
  },
  { timestamps: true }
);

export default model('Field', fieldSchema);
