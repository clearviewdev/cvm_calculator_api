const { POLICY_NAMES, THRESHOLD_REQUIRED } = require('../constants/policy.js');

function validateData(data, isCreate) {
  if (!data.name && isCreate) {
    throw new Error('Policy name must be provided.');
  }

  if (!!isCreate && !Object.values(POLICY_NAMES).includes(data.name)) {
    throw new Error('Policy name not allowed.');
  }

  if (THRESHOLD_REQUIRED.includes(data.name) && !!!data.threshold) {
    throw new Error('Policy threshold must be provided.');
  }

  if (!data.points) {
    throw new Error('Policy points must be provided.');
  }

  if (data.name === POLICY_NAMES.POINT_SCALE && !data.nonHraPoints) {
    throw new Error('Policy non HRA value must be provided.');
  }
}

function formatData(data, isCreate) {
  const formattedData = {};
  if (!!isCreate) {
    formattedData.name = data.name;
  }

  formattedData.points = data.points;

  if (!!data.threshold && THRESHOLD_REQUIRED.includes(data.name)) {
    formattedData.threshold = data.threshold;
  }

  if (data.name === POLICY_NAMES.POINT_SCALE) {
    formattedData.nonHraPoints = data.nonHraPoints;
  }

  return formattedData;
}

module.exports = {
  validateData,
  formatData
};