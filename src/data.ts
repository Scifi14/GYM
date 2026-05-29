import { Program, Trainer, Transformation, MembershipTier } from "./types";

export const PROGRAMS: Program[] = [
  {
    id: "prog_high_performance",
    code: "01 // NEURAL HYPERTROPHY",
    title: "High Performance",
    category: "Neuromuscular & Athleticism",
    duration: "12 Weeks",
    intensity: "Level V (Elite)",
    description: "Designed for high-performance athletes needing immediate explosive acceleration, extreme motor recruitment, and functional power limits.",
    features: [
      "Biomechanical adaptation loops",
      "Dynamic power-output monitoring",
      "Neural recruitment optimization",
      "Force-velocity profile modeling"
    ]
  },
  {
    id: "prog_athletic_recon",
    code: "02 // KINETIC VECTORING",
    title: "Athletic Recon",
    category: "Structural Mobilization & Power",
    duration: "8 Weeks",
    intensity: "Level IV (Advanced)",
    description: "Re-engineer your posture, joint integrity, and kinetic chain transitions to unleash absolute bi-lateral speed and bulletproof your tendons.",
    features: [
      "Dynamic load distribution analysis",
      "Elastic energy storage training",
      "Deceleration mechanics drillsets",
      "Multi-planar joint stabilization"
    ]
  },
  {
    id: "prog_cognitive_end",
    code: "03 // METABOLIC DRIVE",
    title: "Cognitive Endurance",
    category: "Vo2 Max & Mitochondria Focus",
    duration: "10 Weeks",
    intensity: "Level IV (Advanced)",
    description: "Zone 2 aerobic threshold expansion integrated with neuro-cognitive conditioning to make you focused and hyper-resilient under physical fatigue.",
    features: [
      "Heart-rate variability (HRV) anchoring",
      "Simulated high-altitude stamina blocks",
      "Strobe-activated reaction pacing",
      "Mitochondrial density staging"
    ]
  },
  {
    id: "prog_bio_recovery",
    code: "04 // CELLULAR RECOMP",
    title: "Bio-Hacking Recovery",
    category: "Post-Traumatic Bio-Adaptation",
    duration: "Ongoing",
    intensity: "Level I-III (Adaptive)",
    description: "Scientific bio-hacking protocols, thermal shock therapy sequencing, and muscle inflammation mitigation to accelerate recovery cycles up to 300%.",
    features: [
      "Infrasound tissue stabilization",
      "Contrast thermodynamic cycles",
      "CNS down-regulation biofeedback",
      "Hyperbaric pressure protocols"
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "coach_marcus",
    name: "Marcus Vance",
    role: "Biomechanical Specialist",
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    bio: "Marcus has spent 14 years training Olympic sprinters and Formula 1 drivers. He specializes in force-vector analysis and kinetic chain engineering.",
    focus: "Force & Posture Correction",
    stats: {
      experience: "14y Elite Level",
      velocity: "+18% Target Power",
      precision: "98.9% Alignment Score"
    },
    certifications: [
      "Ph.D. Kinesiology",
      "NSCA CSCS *D",
      "Olympic Lifting Master Coach"
    ]
  },
  {
    id: "coach_elena",
    name: "Dr. Elena Rostova",
    role: "Physiological Systems Coach",
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    bio: "Elena focuses on cardiovascular optimization and hormonal regulation. Her programs utilize strict metabolic analytics to drive maximum elite efficiency.",
    focus: "Vo2 Max & Cellular Power",
    stats: {
      experience: "11y Human Performance",
      velocity: "Zone 5 Endurance Peak",
      precision: "97.4% Metabolic Accuracy"
    },
    certifications: [
      "M.Sc. Sports Medicine",
      "Mitochondrial Therapy Cert",
      "Advanced HRV Specialist"
    ]
  },
  {
    id: "coach_kai",
    name: "Kai Thorne",
    role: "High-Performance Catalyst",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    bio: "Kai combines structural weight training with Olympic gymnastics techniques to develop raw relative strength and ultimate physical versatility.",
    focus: "Relative Strength & Tension",
    stats: {
      experience: "9y Gymnastic Conditioning",
      velocity: "3.5x Bodyweight Lift",
      precision: "100% Kinetic Fluidity"
    },
    certifications: [
      "NCSF Master Trainer",
      "Olympic Gymnast Elite Squad",
      "FMS Level 2 Specialist"
    ]
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans_01",
    athlete: "Sarah K.",
    age: 29,
    duration: "16 Weeks",
    metricLabel: "Vo2 Max Threshold",
    beforeValue: 38,
    afterValue: 56,
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    achievement: "+47% Aerobic Threshold & -6.2% body fat",
    quote: "The computational precision of the tracking at this tier removed all guesswork, pushing my peak velocity to levels I didn't think possible in my late twenties."
  },
  {
    id: "trans_02",
    athlete: "David L.",
    age: 34,
    duration: "12 Weeks",
    metricLabel: "Peak Explosive Power (W)",
    beforeValue: 740,
    afterValue: 1080,
    imageUrl: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop",
    achievement: "+340W Output Peak & Kinetic Balance Rebalanced",
    quote: "Dealing with a chronic spine tilt, their biomechanics trainers rebuilt my structural stance. My force vectors are symmetrical, and my power output is unprecedented."
  }
];

export const PLANS: MembershipTier[] = [
  {
    id: "tier_monthly",
    name: "MONTHLY PLAN",
    price: "₹1,999",
    period: "Month",
    tierSymbol: "CY-01",
    description: "Perfect for beginners starting their fitness journey. Best for: People testing consistency and building habits.",
    features: [
      "Full gym access",
      "Cardio + strength equipment",
      "Free fitness assessment",
      "Locker access",
      "1 personal training session",
      "Flexible timing"
    ]
  },
  {
    id: "tier_quarterly",
    name: "HALF-YEARLY PLAN",
    price: "₹4,999",
    period: "6 Months",
    tierSymbol: "SN-02",
    description: "Built for serious progress and visible transformation. Save more compared to monthly membership.",
    features: [
      "Everything in Monthly Plan",
      "Diet guidance support",
      "3 personal training sessions",
      "Group workout classes",
      "Priority support",
      "Progress tracking"
    ],
    isPopular: true
  },
  {
    id: "tier_yearly",
    name: "YEARLY ELITE PLAN",
    price: "₹14,999",
    period: "Year",
    tierSymbol: "AP-03",
    description: "For maximum results, discipline, and long-term fitness goals. Best value plan for committed members.",
    features: [
      "Unlimited gym access",
      "Complete transformation program",
      "Personalized workout plan",
      "Monthly body analysis",
      "Unlimited group classes",
      "Steam / shower access",
      "Premium member support",
      "Exclusive gym merchandise"
    ]
  }
];
