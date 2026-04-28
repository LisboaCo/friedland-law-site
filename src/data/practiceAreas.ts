export interface PracticeArea {
  name: string;
  slug: string;
  icon: string; // lucide icon name
  category: "Vehicular" | "Premises" | "Catastrophic";
  description: string;
}

export const practiceAreas: PracticeArea[] = [
  // VEHICULAR
  { name: "Car Accident", slug: "car-accident", icon: "Car", category: "Vehicular", description: "[PLACEHOLDER] Representation for car accident victims." },
  { name: "Truck Accident", slug: "truck-accident", icon: "Truck", category: "Vehicular", description: "[PLACEHOLDER] Fighting trucking companies and their insurers." },
  { name: "Motorcycle Accident", slug: "motorcycle-accident", icon: "Bike", category: "Vehicular", description: "[PLACEHOLDER] Protecting motorcycle riders' rights." },
  { name: "Bicycle Accident", slug: "bicycle-accident", icon: "Bike", category: "Vehicular", description: "[PLACEHOLDER] Bicycle injury claims and litigation." },
  { name: "Boat Accident", slug: "boat-accident", icon: "Anchor", category: "Vehicular", description: "[PLACEHOLDER] Maritime and boating accident representation." },
  { name: "Uber/Lyft Accident", slug: "rideshare-accident", icon: "Smartphone", category: "Vehicular", description: "[PLACEHOLDER] Uber and Lyft accident claims." },
  
  // PREMISES
  { name: "Slip & Fall", slug: "slip-and-fall", icon: "AlertTriangle", category: "Premises", description: "[PLACEHOLDER] Premises liability and slip and fall cases." },
  { name: "Medical Malpractice", slug: "medical-malpractice", icon: "Stethoscope", category: "Premises", description: "[PLACEHOLDER] Medical negligence and malpractice claims." },
  { name: "Dog Bite Injury", slug: "dog-bite", icon: "Dog", category: "Premises", description: "[PLACEHOLDER] Dog bite and animal attack representation." },
  { name: "Construction Accident", slug: "construction-accident", icon: "HardHat", category: "Premises", description: "[PLACEHOLDER] Workplace and construction site injuries." },
  
  // CATASTROPHIC
  { name: "Wrongful Death", slug: "wrongful-death", icon: "Heart", category: "Catastrophic", description: "[PLACEHOLDER] Justice for families who've lost a loved one." },
  { name: "Brain Injury (TBI)", slug: "brain-injury", icon: "Brain", category: "Catastrophic", description: "[PLACEHOLDER] Traumatic brain injury representation." },
  { name: "Birth Injury", slug: "birth-injury", icon: "Baby", category: "Catastrophic", description: "[PLACEHOLDER] Representation for birth-related medical injuries." },
];

export const megaMenuCategories = [
  { title: "Vehicular", areas: practiceAreas.filter(a => a.category === "Vehicular") },
  { title: "Premises", areas: practiceAreas.filter(a => a.category === "Premises") },
  { title: "Catastrophic", areas: practiceAreas.filter(a => a.category === "Catastrophic") },
];
