export interface Testimonial {
  name: string;
  initials: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria S.",
    initials: "MS",
    rating: 5,
    text: "[PLACEHOLDER] Friedland Law treated me like family. My attorney answered every call and fought hard for my case. I received far more than the insurance company initially offered.",
  },
  {
    name: "James T.",
    initials: "JT",
    rating: 5,
    text: "[PLACEHOLDER] After my truck accident, I was overwhelmed. The team at Friedland took over and handled everything. I always spoke directly with my lawyer — never a case manager.",
  },
  {
    name: "Ana R.",
    initials: "AR",
    rating: 5,
    text: "[PLACEHOLDER] Falamos Português! Patricia was incredible. She explained everything in my language and fought for every dollar. I highly recommend Friedland Law.",
  },
  {
    name: "Robert K.",
    initials: "RK",
    rating: 5,
    text: "[PLACEHOLDER] I thought my case was hopeless after the insurance denied my claim. Friedland Law reversed the denial and got me $450,000. Unbelievable.",
  },
  {
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    text: "[PLACEHOLDER] What sets Friedland apart is that you actually talk to YOUR attorney. No runaround. They prepared my case for trial and the insurance company settled for 10x their initial offer.",
  },
];
