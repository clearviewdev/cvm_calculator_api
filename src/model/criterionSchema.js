import { Schema, model } from 'mongoose';
import { POLICY_NAMES } from '../constants/policy.js';

const criterionSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Criterion name is required.'],
      enum: Object.values(POLICY_NAMES),
      immutable: true,
    },
    threshold: {
      type: String,
    },
    points: {
      type: String,
      required: [true, 'Criterion points are required.'],
    },
    nonHraPoints: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model('Criterion', criterionSchema);
