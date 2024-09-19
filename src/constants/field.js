import { POLICY_NAMES } from "./policy.js";

export const FieldNames = {
  policyWithHRA: "policyWithHRA",
  totalVBC: "totalVBC",
  totalHRA: "totalHRA",
  totalReferalSalesInBound: "totalReferalSalesinbound",
  totalReferalSalesOutBound: "totalReferalSalesOutBound",
  policyWithoutHRA: "policyWithoutHRA",
};

export const FieldOriginalName = [
  POLICY_NAMES.OUTBOUND_CALL_CONVERSION,
  POLICY_NAMES.OUTBOUND_PLACEMENT_RATE,
  POLICY_NAMES.OUTBOUND_DAILY_SALES,
  POLICY_NAMES.INBOUND_CALL_CONVERSION,
  POLICY_NAMES.INBOUND_PLACEMENT_RATE,
  POLICY_NAMES.INBOUND_DAILY_SALES,
  FieldNames.policyWithHRA,
  FieldNames.policyWithoutHRA,
  FieldNames.totalHRA,
  FieldNames.totalReferalSalesInBound,
  FieldNames.totalReferalSalesOutBound,
  FieldNames.totalVBC,
];
