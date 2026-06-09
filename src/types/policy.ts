export interface Policy {
  id: string;
  policyNumber: string;
  destination: string;
  type: "ANNUAL" | "SINGLE";
  plan: string;
  startDate: string;
  endDate?: string;
  maxTripDuration?: number;
  excess: number;
  status: "ACTIVE" | "EXPIRED";
}