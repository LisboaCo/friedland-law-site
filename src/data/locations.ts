export interface Location {
  city: string;
  state: string;
  slug: string;
  address: string;
  zip: string;
  phone: string;
}

export const locations: Location[] = [
  { city: "Jacksonville", state: "FL", slug: "jacksonville", address: "6620 Southpoint Dr S Suite 115-E", zip: "32216", phone: "800-210-HURT" },
  { city: "Ft. Lauderdale", state: "FL", slug: "ft-lauderdale", address: "101 NE 3rd Ave Suite 1600", zip: "33301", phone: "800-210-HURT" },
  { city: "West Palm Beach", state: "FL", slug: "west-palm-beach", address: "225 Southern Blvd Suite 101", zip: "33405", phone: "800-210-HURT" },
  { city: "New York", state: "NY", slug: "new-york", address: "50 Broad Street #1502", zip: "10004", phone: "800-210-HURT" },
  { city: "River Edge", state: "NJ", slug: "river-edge", address: "70 Grand Ave #107", zip: "07661", phone: "800-210-HURT" },
];
