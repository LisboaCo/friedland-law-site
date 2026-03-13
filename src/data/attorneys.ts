export interface Attorney {
  name: string;
  title: string;
  slug: string;
  bio: string;
  areas: string[];
  education: string[];
  awards: string[];
  isStaff?: boolean;
  staffTitle?: string;
}

export const attorneys: Attorney[] = [
  {
    name: "Lee Friedland",
    title: "Founding Attorney",
    slug: "lee-friedland",
    bio: "[PLACEHOLDER] Lee Friedland founded Friedland Law with a singular mission: to give every injured person direct access to the attorney handling their case. With decades of trial experience, Lee has recovered millions for clients across Florida, New York, and New Jersey.",
    areas: ["Car Accident", "Truck Accident", "Wrongful Death", "Medical Malpractice"],
    education: ["J.D., [PLACEHOLDER] Law School", "B.A., [PLACEHOLDER] University"],
    awards: ["Super Lawyers", "Top 100 Trial Lawyers", "Million Dollar Advocates Forum"],
  },
  {
    name: "Michael Golety",
    title: "Attorney",
    slug: "michael-golety",
    bio: "[PLACEHOLDER] Michael Golety is a dedicated personal injury attorney known for his aggressive representation and compassionate client care.",
    areas: ["Car Accident", "Motorcycle Accident", "Slip & Fall"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Nilen Bolanger",
    title: "Attorney",
    slug: "nilen-bolanger",
    bio: "[PLACEHOLDER] Nilen Bolanger brings a methodical, trial-ready approach to every personal injury case.",
    areas: ["Truck Accident", "Workplace Injury", "Brain Injury"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Olivia Bivona",
    title: "Attorney",
    slug: "olivia-bivona",
    bio: "[PLACEHOLDER] Olivia Bivona is a fierce advocate for injury victims, focusing on catastrophic injury cases.",
    areas: ["Wrongful Death", "Brain Injury", "Medical Malpractice"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Abhishek Yadav",
    title: "Attorney",
    slug: "abhishek-yadav",
    bio: "[PLACEHOLDER] Abhishek Yadav combines sharp legal analysis with a client-first philosophy.",
    areas: ["Car Accident", "Rideshare Accident", "Pedestrian Accident"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Patricia Medina",
    title: "Attorney",
    slug: "patricia-medina",
    bio: "[PLACEHOLDER] Patricia Medina is a bilingual attorney who helps Spanish-speaking clients navigate the legal system with confidence.",
    areas: ["Car Accident", "Slip & Fall", "Dog Bite"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Sara Schafer",
    title: "Attorney",
    slug: "sara-schafer",
    bio: "[PLACEHOLDER] Sara Schafer is known for her meticulous case preparation and courtroom presence.",
    areas: ["Medical Malpractice", "Nursing Home Abuse", "Wrongful Death"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Francesca Vigna",
    title: "Attorney",
    slug: "francesca-vigna",
    bio: "[PLACEHOLDER] Francesca Vigna brings passion and precision to every case she handles.",
    areas: ["Car Accident", "Truck Accident", "Motorcycle Accident"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Alphonse Bartoloni",
    title: "Attorney",
    slug: "alphonse-bartoloni",
    bio: "[PLACEHOLDER] Alphonse Bartoloni is an experienced litigator with a track record of substantial verdicts and settlements.",
    areas: ["Workplace Injury", "Slip & Fall", "Truck Accident"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
  {
    name: "Nabile Uddin",
    title: "Attorney",
    slug: "nabile-uddin",
    bio: "[PLACEHOLDER] Nabile Uddin is committed to fighting for fair compensation for every client.",
    areas: ["Car Accident", "Pedestrian Accident", "Dog Bite"],
    education: ["J.D., [PLACEHOLDER] Law School"],
    awards: [],
  },
];

export const seniorStaff: Attorney[] = [
  {
    name: "Mindy Friedland",
    title: "Chief Executive Officer",
    slug: "mindy-friedland",
    bio: "[PLACEHOLDER] Mindy Friedland oversees all operations at Friedland Law.",
    areas: [],
    education: [],
    awards: [],
    isStaff: true,
    staffTitle: "Chief Executive Officer",
  },
  {
    name: "Yusena Carreño",
    title: "Human Resources",
    slug: "yusena-carreno",
    bio: "[PLACEHOLDER]",
    areas: [],
    education: [],
    awards: [],
    isStaff: true,
    staffTitle: "Human Resources",
  },
  {
    name: "Sazib Daowan",
    title: "Pre-Litigation Supervisor",
    slug: "sazib-daowan",
    bio: "[PLACEHOLDER]",
    areas: [],
    education: [],
    awards: [],
    isStaff: true,
    staffTitle: "Pre-Litigation Supervisor",
  },
  {
    name: "Stephanie Aloyon",
    title: "Director of Operations",
    slug: "stephanie-aloyon",
    bio: "[PLACEHOLDER]",
    areas: [],
    education: [],
    awards: [],
    isStaff: true,
    staffTitle: "Director of Operations",
  },
];
