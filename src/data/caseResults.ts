export interface CaseResult {
  initialOffer: number;
  settlement: number;
  description: string;
  caseType: string;
}

export const caseResults: CaseResult[] = [
  { initialOffer: 100000, settlement: 1600000, description: "Slip & Fall — Severe Leg Fracture", caseType: "Slip & Fall" },
  { initialOffer: 50000, settlement: 1000000, description: "Trucking Accident — Liability Denial Reversed", caseType: "Truck Accident" },
  { initialOffer: 50000, settlement: 500000, description: "Auto Accident — No Surgery Required", caseType: "Car Accident" },
  { initialOffer: 25000, settlement: 390000, description: "Commercial Van Collision — Significant Injuries", caseType: "Car Accident" },
  { initialOffer: 0, settlement: 450000, description: "Liability Denial — Pre-Suit Resolution", caseType: "Other" },
  { initialOffer: 40000, settlement: 600000, description: "Auto Accident — Disputed Liability Claims", caseType: "Car Accident" },
];
