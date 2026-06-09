export interface Destination {
  code: string;
  name: string;
}

export interface Policy {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  primaryTravellerFirstname: string;
  primaryTravellerLastName: string;
  primaryTravellerPhoneNumber: string;
  status: "Active" | "Expired";
  destinations: Destination[];
  alphaCode: string;
  iSO3CountryOfResidence: string;
  underwriterCode: string;
  groupCode: string;
  type: "Annual" | "Single Trip";
  excess: number;
  maxTripDuration: number;
  planName: string;
}