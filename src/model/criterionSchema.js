const { Schema, model } = require('mongoose');
const { POLICY_NAMES } = require('../constants/policy.js');

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

module.exports = model('Criterion', criterionSchema);