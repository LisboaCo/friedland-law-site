export interface PracticeArea {
  name: string;
  slug: string;
  icon: string; // lucide icon name
  category: "Vehicular" | "Premises" | "Catastrophic";
  description: string;
}

export const practiceAreas: PracticeArea[] = [
  { name: "Car Accident", slug: "car-accident", icon: "Car", category: "Vehicular", description: "[PLACEHOLDER] Aggressive representation for car accident victims." },
  { name: "Truck Accident", slug: "truck-accident", icon: "Truck", category: "Vehicular", description: "[PLACEHOLDER] Fighting trucking companies and their insurers." },
  { name: "Motorcycle Accident", slug: "motorcycle-accident", icon: "Bike", category: "Vehicular", description: "[PLACEHOLDER] Protecting the rights of motorcycle riders." },
  { name: "Rideshare Accident", slug: "rideshare-accident", icon: "Smartphone", category: "Vehicular", description: "[PLACEHOLDER] Uber, Lyft, and rideshare accident claims." },
  { name: "Slip & Fall", slug: "slip-and-fall", icon: "AlertTriangle", category: "Premises", description: "[PLACEHOLDER] Holding property owners accountable." },
  { name: "Wrongful Death", slug: "wrongful-death", icon: "Heart", category: "Catastrophic", description: "[PLACEHOLDER] Justice for families who've lost a loved one." },
  { name: "Brain Injury (TBI)", slug: "brain-injury", icon: "Brain", category: "Catastrophic", description: "[PLACEHOLDER] Traumatic brain injury representation." },
  { name: "Dog Bite", slug: "dog-bite", icon: "Dog", category: "Premises", description: "[PLACEHOLDER] Dog bite and animal attack claims." },
  { name: "Pedestrian Accident", slug: "pedestrian-accident", icon: "Footprints", category: "Vehicular", description: "[PLACEHOLDER] Pedestrian accident injury claims." },
];

export const megaMenuCategories = [
  { title: "Vehicular", areas: practiceAreas.filter(a => a.category === "Vehicular") },
  { title: "Premises", areas: practiceAreas.filter(a => a.category === "Premises") },
  { title: "Catastrophic", areas: practiceAreas.filter(a => a.category === "Catastrophic") },
];
