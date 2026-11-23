export type PlanId = 'basic' | 'pro' | 'elite';

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: 'Strength' | 'Conditioning' | 'Coaching & Mobility';
  difficulty: string;
  duration: string;
  schedule: string;
  description: string;
  fullOverview: string;
  highlights: string[];
  equipment: string;
  image: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  credentials: string;
  bio: string;
  image: string;
  socials: {
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

export interface FacilityItem {
  id: string;
  name: string;
  dimensions: string;
  accessTier: string;
  equipmentHighlight: string;
  description: string;
  image: string;
}

export interface MembershipPlan {
  id: PlanId;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  popular?: boolean;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  program: string;
  outcome: string;
  rating: number;
  quote: string;
  image: string;
}

export interface FounderProfile {
  name: string;
  designation: string;
  /**
   * Replace this path with Ahmad's uploaded photograph
   * (for example: '/src/assets/images/ahmad_founder.jpg').
   */
  image: string;
  imageAlt: string;
  quote: string;
  introduction: string;
  philosophy: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
}

export const HERO_IMAGE = '/src/assets/images/hero_ironforge_athlete_1795450171204.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_gym_interior_1795450294232.jpg';

export const FOUNDER_PROFILE: FounderProfile = {
  name: 'Ahmad',
  designation: 'FOUNDER',
  image: '/images/ahmad-founder.png',
  imageAlt: 'Ahmad, FOUNDER of IRON VAULT FITNESS',
  quote:
    "Strength isn't just about lifting weights. It's about building a stronger version of yourself every single day.",
  introduction:
    'I built IRON VAULT FITNESS to be more than a training floor—it is a disciplined environment designed for people who refuse to settle for average. Every rack, coaching standard, and recovery space here exists to help members build lasting physical strength and mental resilience.',
  philosophy:
    'Real transformation comes from consistency over shortcuts, intentional movement over ego lifting, and surrounding yourself with a standard that pushes you forward long after initial motivation fades.',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
  },
};

export const GYM_STATS: StatItem[] = [
  {value: 2500, suffix: '+', label: 'Members'},
  {value: 15, suffix: '+', label: 'Expert Trainers'},
  {value: 30, suffix: '+', label: 'Training Programs'},
  {value: 10, suffix: '+', label: 'Years Experience'},
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    category: 'Strength',
    difficulty: 'All Levels',
    duration: '60 Min',
    schedule: '4–5 Days / Week',
    description:
      'Barbell-focused linear and wave periodization engineered to build raw force production, joint stability, and competition-grade technique.',
    fullOverview:
      'Built around the squat, bench press, deadlift, and overhead press, our Strength Training track pairs calibrated competition plates with velocity tracking and structured progression blocks.',
    highlights: [
      'Biomechanical lift diagnostics & bar-path coaching',
      'Progressive 12-week strength periodization blocks',
      'Accessory work targeting posterior chain & core bracing',
    ],
    equipment: 'Competition power racks, calibrated steel plates, specialty bars, lifting platforms.',
    image: '/src/assets/images/program_strength_training_1795450170987.jpg',
  },
  {
    id: 'muscle-building',
    title: 'Muscle Building',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: '65 Min',
    schedule: '5 Days / Week',
    description:
      'Targeted hypertrophy splits combining mechanical tension, controlled eccentric tempo, and high-precision machine and free-weight volume.',
    fullOverview:
      'Designed for lean mass development and symmetrical physique sculpting, this program balances compound lifts with isolated tension protocols and progressive volume tracking.',
    highlights: [
      'Custom Push / Pull / Legs & Upper-Lower hypertrophy splits',
      'Tempo-controlled eccentric and peak-contraction sets',
      'Monthly body-composition & circumference tracking',
    ],
    equipment: 'Plate-loaded leverage machines, dual cable towers, urethane dumbbells up to 60 kg.',
    image: '/src/assets/images/program_muscle_building_1795450170187.jpg',
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    category: 'Conditioning',
    difficulty: 'Beginner – Int.',
    duration: '50 Min',
    schedule: '4 Days / Week',
    description:
      'Metabolic conditioning intervals paired with resistance circuits to accelerate caloric expenditure while preserving hard-earned lean muscle.',
    fullOverview:
      'Sustainable fat loss requires metabolic efficiency without sacrificing strength. Our coaches combine zone-based energy system work with full-body resistance circuits and practical nutrition structure.',
    highlights: [
      'Heart-rate zone intervals on curved treadmills & ergs',
      'Muscle-sparing resistance supersets',
      'Weekly accountability check-ins & macro targets',
    ],
    equipment: 'Curved non-motorized treadmills, ski ergs, rowing ergometers, kettlebells.',
    image: '/src/assets/images/program_weight_loss_1795450169887.jpg',
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    category: 'Conditioning',
    difficulty: 'Intermediate – Adv.',
    duration: '60 Min',
    schedule: 'Daily WODs',
    description:
      'High-intensity functional training fusing Olympic lifting, gymnastics skill work, and engine-building metcons in a driven team atmosphere.',
    fullOverview:
      'Every daily session tests work capacity across broad time and modal domains—from heavy clean-and-jerk complexes to sled pushes, rope climbs, and benchmark conditioning workouts.',
    highlights: [
      'Coached Olympic barbell & gymnastics progressions',
      'Scalable daily WODs with leaderboard pacing',
      'Team conditioning sessions on dedicated indoor turf',
    ],
    equipment: 'Competition rigs, bumper plates, prowler sleds, battle ropes, gymnastic rings.',
    image: '/src/assets/images/program_crossfit_1795450171521.jpg',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'Coaching & Mobility',
    difficulty: 'Customized',
    duration: '60 Min',
    schedule: 'Flexible Booking',
    description:
      'Dedicated 1-on-1 coaching tailored to your biomechanics, injury history, travel schedule, and exact performance milestones.',
    fullOverview:
      'Train inside our private coaching suite with a dedicated specialist who designs every rep, recovery protocol, and nutrition adjustment around your weekly calendar.',
    highlights: [
      'Comprehensive movement screen & baseline strength audit',
      '100% bespoke training & travel workout programming',
      'Direct coach messaging & bi-weekly physique reviews',
    ],
    equipment: 'Private training suite, dedicated power rack, custom dumbbell array, mobility tools.',
    image: '/src/assets/images/program_personal_training_1795450171779.jpg',
  },
  {
    id: 'yoga-flexibility',
    title: 'Yoga & Flexibility',
    category: 'Coaching & Mobility',
    difficulty: 'All Levels',
    duration: '55 Min',
    schedule: 'Daily Sessions',
    description:
      'Athletic vinyasa, end-range joint mobility, and breathwork engineered to restore posture, prevent injury, and unlock deeper squat and overhead positions.',
    fullOverview:
      'Far from passive stretching, our Yoga & Flexibility track builds active end-range control, thoracic rotation, and parasympathetic nervous system recovery for lifters and runners.',
    highlights: [
      'Active hip, shoulder, and ankle mobility sequences',
      'Decompression breathwork for post-session recovery',
      'Small-group mat instruction in an acoustic-isolated studio',
    ],
    equipment: 'High-density pro mats, cork blocks, mobility straps, acoustic studio.',
    image: '/src/assets/images/program_yoga_flexibility_1795450171159.jpg',
  },
];

export const TRAINERS: TrainerItem[] = [
  {
    id: 'alex-morgan',
    name: 'Alex Morgan',
    role: 'Strength Coach',
    experience: '11 Years Experience',
    credentials: 'NSCA-CSCS',
    bio: 'Former national powerlifting medalist specializing in barbell mechanics, neural force development, and pain-free heavy squatting.',
    image: '/src/assets/images/trainer_alex_morgan_1795450171313.jpg',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://x.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'david-wilson',
    name: 'David Wilson',
    role: 'Bodybuilding Specialist',
    experience: '13 Years Experience',
    credentials: 'IFBB Pro Prep Coach',
    bio: 'Hypertrophy strategist focused on mechanical tension, symmetrical muscular development, and evidence-based contest and lifestyle nutrition.',
    image: '/src/assets/images/trainer_david_wilson_1795450170792.jpg',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://x.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Yoga Instructor',
    experience: '9 Years Experience',
    credentials: 'E-RYT 500 · FRCms',
    bio: 'Combines classical vinyasa with Functional Range Conditioning to restore joint longevity, spinal health, and athletic breath control.',
    image: '/src/assets/images/trainer_sarah_johnson_1795450295841.jpg',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://x.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'michael-carter',
    name: 'Michael Carter',
    role: 'CrossFit Coach',
    experience: '10 Years Experience',
    credentials: 'CF-L3 · USAW',
    bio: 'Regional CrossFit competitor who coaches high-output engine building, Olympic barbell efficiency, and resilient mental pacing.',
    image: '/src/assets/images/trainer_michael_carter_1795450295712.jpg',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://x.com',
      linkedin: 'https://linkedin.com',
    },
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'weight-training-area',
    name: 'Weight Training Area',
    dimensions: '8,500 Sq. Ft.',
    accessTier: 'All Members',
    equipmentHighlight: '12 Power Racks · Urethane Iron up to 60 kg',
    description:
      'An expansive obsidian training floor anchored by competition-grade racks, calibrated barbell platforms, and custom leverage machines spaced for zero crowding.',
    image: '/src/assets/images/facility_weight_area_1795450295838.jpg',
  },
  {
    id: 'cardio-zone',
    name: 'Cardio Zone',
    dimensions: '3,800 Sq. Ft.',
    accessTier: 'All Members',
    equipmentHighlight: 'Curved Sprints · Stair Climbers · Concept2 Ergs',
    description:
      'Floor-to-ceiling tinted architectural glass overlooking the skyline, equipped with connected treadmills, air bikes, and performance rowing ergometers.',
    image: '/src/assets/images/facility_cardio_zone_1795450296170.jpg',
  },
  {
    id: 'functional-training',
    name: 'Functional Training',
    dimensions: '4,200 Sq. Ft.',
    accessTier: 'Pro & Elite · Classes',
    equipmentHighlight: '30m Black Turf · Custom Steel Rig · Prowler Sleds',
    description:
      'Shock-absorbing sprint turf, competition kettlebell walls, gymnastic rings, and heavy sled tracks designed for explosive conditioning and CrossFit WODs.',
    image: '/src/assets/images/facility_functional_zone_1795450170949.jpg',
  },
  {
    id: 'personal-training-studio',
    name: 'Personal Training Studio',
    dimensions: '2,200 Sq. Ft.',
    accessTier: '1-on-1 Coaching Sessions',
    equipmentHighlight: 'Private Suites · Acoustic Timber Walls',
    description:
      'Dedicated private bays insulated from the main floor so 1-on-1 athletes and coaches can focus entirely on technique, assessment, and progression.',
    image: '/src/assets/images/facility_pt_studio_1795450171168.jpg',
  },
  {
    id: 'locker-rooms',
    name: 'Locker Rooms',
    dimensions: '2,800 Sq. Ft.',
    accessTier: 'All Members',
    equipmentHighlight: 'Digital Keyless Lockers · Rain Showers',
    description:
      'Spa-grade brushed slate changing suites featuring digital lockers, heated stone benches, backlit grooming vanities, and complimentary chilled towels.',
    image: '/src/assets/images/facility_locker_rooms_1795450173960.jpg',
  },
  {
    id: 'recovery-zone',
    name: 'Recovery Zone',
    dimensions: '2,500 Sq. Ft.',
    accessTier: 'Pro & Elite Priority',
    equipmentHighlight: 'Cedar Infrared Sauna · 4°C Cold Plunge',
    description:
      'Contrast therapy suite with full-spectrum cedar infrared saunas, temperature-controlled cold plunge pools, and pneumatic compression lounges.',
    image: '/src/assets/images/facility_recovery_zone_1795450295321.jpg',
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'BASIC',
    tagline: 'Essential Floor Access',
    price: 999,
    priceFormatted: '₹999',
    features: [
      'Gym access',
      'Basic equipment',
      'Locker access',
      'General workout guidance',
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    tagline: 'Complete Club Performance',
    price: 1799,
    priceFormatted: '₹1,799',
    popular: true,
    features: [
      'Full gym access',
      'All workout programs',
      'Fitness assessment',
      'Group classes',
      'Locker access',
    ],
  },
  {
    id: 'elite',
    name: 'ELITE',
    tagline: 'Private Coaching & Recovery',
    price: 2999,
    priceFormatted: '₹2,999',
    features: [
      'Everything in Pro',
      'Personal trainer sessions',
      'Customized workout plan',
      'Nutrition guidance',
      'Priority access',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Product Architect · Member for 18 Months',
    program: 'Strength Training + Muscle Building',
    outcome: '+14 kg Lean Muscle · 180 kg Deadlift',
    rating: 5,
    quote:
      'Before joining IRON VAULT FITNESS, I bounced between crowded gyms with zero structure. Coaching under Alex fixed my squat mechanics in three weeks, and in 18 months my deadlift climbed from 95 kg to 180 kg while dropping 7% body fat.',
    image: '/src/assets/images/member_arjun_mehta_1795450171056.jpg',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Creative Director · Member for 14 Months',
    program: 'Weight Loss + Yoga & Flexibility',
    outcome: '-12 kg Fat Loss · Pain-Free Mobility',
    rating: 5,
    quote:
      'Desk work left me with constant lower-back stiffness and stalled energy. Combining morning conditioning circuits with Sarah’s mobility sessions helped me lose 12 kg sustainably and complete my first unassisted pull-ups.',
    image: '/src/assets/images/member_priya_nair_1795450295677.jpg',
  },
  {
    id: 'vikram-rao',
    name: 'Vikram Rao',
    role: 'Venture Partner · Member for 2 Years',
    program: 'Personal Training + Recovery Zone',
    outcome: 'Sub-14% Body Fat · 5:30 AM Consistency',
    rating: 5,
    quote:
      'The 5:30 AM environment here is unmatched—quiet, spotless, and built for people who take execution seriously. Having private coaching sessions paired with the sauna and cold plunge keeps me sharp through 60-hour workweeks.',
    image: '/src/assets/images/member_vikram_rao_1795450296480.jpg',
  },
];
