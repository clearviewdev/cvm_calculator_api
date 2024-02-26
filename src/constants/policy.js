const POLICY_NAMES = {
  INBOUND_CALL_CONVERSION: 'inbound_call_conversion',
  INBOUND_PLACEMENT_RATE: 'inbound_placement_rate',
  INBOUND_DAILY_SALES: 'inbound_daily_sales_average',
  OUTBOUND_CALL_CONVERSION: 'outbound_call_conversion',
  OUTBOUND_PLACEMENT_RATE: 'outbound_placement_rate',
  OUTBOUND_DAILY_SALES: 'outbound_daily_sales_average',
  HRA: 'health_reimbursement_arrangements',
  VBC: 'value_based_care',
  REFERRAL_BONUS: 'referral_bonus',
  POINT_SCALE: 'point_scale',
};

const THRESHOLD_REQUIRED = [
  POLICY_NAMES.OUTBOUND_CALL_CONVERSION,
  POLICY_NAMES.OUTBOUND_PLACEMENT_RATE,
  POLICY_NAMES.OUTBOUND_DAILY_SALES,
  POLICY_NAMES.INBOUND_CALL_CONVERSION,
  POLICY_NAMES.INBOUND_PLACEMENT_RATE,
  POLICY_NAMES.INBOUND_DAILY_SALES,
  POLICY_NAMES.POINT_SCALE,
];

module.exports = {
  POLICY_NAMES,
  THRESHOLD_REQUIRED
};