import { Service, Testimonial, BlogPost, PricingPlan, Faq } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency & SOS',
    description: 'Fast response roadside rescue anywhere in Hyderabad — 24×7. Flat tyre assist, towing, jump start, fuel delivery, and lockout assistance.',
    icon: 'Siren',
    image: 'https://images.pexels.com/photos/8931963/pexels-photo-8931963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'mechanical',
    title: 'Mechanical Services',
    description: 'Full mechanical diagnostics and repairs by certified specialists. Engine diagnostics, engine repair, transmission, gearbox, clutch, and cooling setup.',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1725289339928-06ee31684df5?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    id: 'electrical',
    title: 'Electrical & Wiring',
    description: 'Complete auto-electrical diagnosis and wiring solutions. Starter motor, alternator, battery health check, ECU diagnostic scans, and power windows.',
    icon: 'Zap',
    image: 'https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    description: 'Precision brake service for uncompromising safety. Complete brake pads replacement, brake disc turning, brake oil bleed, and ABS diagnostics.',
    icon: 'Disc',
    image: 'https://images.unsplash.com/photo-1696494561430-de087dd0bd69?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    id: 'ac',
    title: 'AC & Climate Control',
    description: 'Ice-cold cabins restored, sensors calibrated. Deep AC service, AC compressor repairs, cabin filter updates, and dynamic leak tests.',
    icon: 'Snowflake',
    image: 'https://images.pexels.com/photos/8985457/pexels-photo-8985457.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'tyres',
    title: 'Tyres & Wheels',
    description: 'From punctures to precision alignment. 3D wheel alignment, dynamic balancing, tyre rotation, and premium tubeless puncture repairs.',
    icon: 'CircleDot',
    image: 'https://images.pexels.com/photos/18372024/pexels-photo-18372024.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'maintenance',
    title: 'Periodic Maintenance',
    description: 'Preventive service that keeps you moving. Oil change, filter upgrades, 40-point diagnostics scan, and comprehensive fluid checks.',
    icon: 'Gauge',
    image: 'https://images.pexels.com/photos/8986105/pexels-photo-8986105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=600',
  },
  {
    id: 'body-shop',
    title: 'Body Shop & Painting',
    description: 'Restore the showroom finish — inside and out. Professional scratch removal, denting, painting, ceramic coating, and bumper repair.',
    icon: 'SprayCan',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    id: 'cleaning',
    title: 'Cleaning & Detailing',
    description: 'Studio-grade wash and interior detailing. Foam washing, deep extraction vacuum, upholstery steam cleaning, and dashboard polishing.',
    icon: 'Droplets',
    image: 'https://images.pexels.com/photos/6873120/pexels-photo-6873120.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'others',
    title: 'Concierge & Others',
    description: 'Pickup, drop, fleet & corporate solutions. Pre-purchase inspection, doorstep mechanic advice, and insurance claims concierge.',
    icon: 'Truck',
    image: 'https://images.pexels.com/photos/7643907/pexels-photo-7643907.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    role: 'Banjara Hills • BMW 5 Series',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'My car broke down at midnight on ORR. FixMyCarHub reached in 22 minutes and had me driving again in under an hour. Genuinely impressed.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Reddy',
    role: 'Gachibowli • Hyundai Creta',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'Loved the transparent quote after inspection. No pressure, no upselling — approved only what I needed. Feels like a premium concierge for cars.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Rahul Iyer',
    role: 'Hitech City • Skoda Slavia',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: "Doorstep AC service saved me a whole Saturday. Technician was professional, uniformed and had every tool. Highly recommend.",
    rating: 5,
  },
  {
    id: '4',
    name: 'Sneha Nair',
    role: 'Jubilee Hills • Mercedes-Benz GLC',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
    quote: 'Ceramic coating finish is showroom level. Booking on WhatsApp was ridiculously easy.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Vikram Rao',
    role: 'Madhapur • Toyota Innova',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80',
    quote: 'Flat tyre help within 25 minutes at 11 PM. This is what modern roadside assistance should feel like.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Ananya Deshpande',
    role: 'Kukatpally • Used Honda City',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    quote: 'Pre-purchase inspection saved me from a lemon. The report was detailed, photographed and honest.',
    rating: 5,
  },
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'best-car-service-hyderabad-2026',
    title: 'Best Car Service in Hyderabad: Complete 2026 Guide',
    category: 'Buying Guide',
    date: '08 Dec 2025',
    image: 'https://images.pexels.com/photos/8986105/pexels-photo-8986105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    readTime: '7 min read',
    excerpt: 'Everything Hyderabad drivers need to know about car service — pricing, timelines, doorstep repair, and how to pick the right workshop.',
    author: 'FixMyCarHub Editorial',
    tags: ['Hyderabad', 'Car Service', 'Buying Guide'],
    content: [
      {
        h: 'Why car service matters more than you think',
        p: "Regular car service isn't just about oil changes. In Hyderabad's stop-and-go traffic across ORR, Cyberabad and Old City, engines heat up faster, brake pads wear quicker and AC compressors run longer. A well-timed inspection every 5,000–7,500 km saves you from unexpected breakdowns and multiplies resale value."
      },
      {
        h: 'How much does car service cost in Hyderabad?',
        p: 'At FixMyCarHub we keep it simple: a flat ₹599 inspection charge, no matter where your car is — home, roadside, garage, office or apartment. Repair charges depend on parts, labour and complexity. Nothing is opened or replaced without your explicit approval.'
      },
      {
        h: 'Doorstep vs workshop service',
        p: 'For AC service, battery replacement, brake pad change, minor electrical faults and general inspection — doorstep service is faster. For gearbox, painting, dents or ECU-level diagnostics, workshop-based service is recommended.'
      }
    ]
  },
  {
    id: 'car-breakdown-orr-hyderabad-what-to-do',
    title: "Car Breakdown on ORR? Roadside SOS Checklist",
    category: 'Safety',
    date: '06 Dec 2025',
    image: 'https://images.pexels.com/photos/8931963/pexels-photo-8931963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    readTime: '5 min read',
    excerpt: 'Stranded on the Outer Ring Road or in city traffic? Follow this proven 6-step checklist to stay safe and get help fast.',
    author: 'FixMyCarHub Rescue Team',
    tags: ['SOS', 'Roadside', 'Hyderabad'],
    content: [
      {
        h: 'Step 1 — Move to the safest shoulder',
        p: "Turn hazards on immediately. Steer to the left shoulder if you're on ORR or NH-65. Never stop in an active lane if you can crawl to the emergency shoulder."
      },
      {
        h: 'Step 2 — Warn incoming traffic',
        p: "Place a warning triangle 50–100 metres behind your car. If you don't carry one, use hazard lights + open boot as a visibility signal at night."
      },
      {
        h: 'Step 3 — Call FixMyCarHub SOS',
        p: 'Our 24×7 dispatch line reaches Gachibowli, Madhapur, Kondapur, Kukatpally, Banjara Hills, Jubilee Hills, Hitech City, and beyond in a 30-minute average response time.'
      }
    ]
  },
  {
    id: 'signs-car-battery-dying',
    title: '5 Signs Your Car Battery is About to Die',
    category: 'Electrical',
    date: '04 Dec 2025',
    image: 'https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=1600',
    readTime: '4 min read',
    excerpt: 'Slow cranking, dim headlights, clicking sounds — here are the exact battery warning signs and how doorstep diagnostics works.',
    author: 'FixMyCarHub Electrical Team',
    tags: ['Battery', 'Electrical', 'Doorstep'],
    content: [
      {
        h: '1. Slow crank on startup',
        p: "If the starter takes 2+ seconds to spin the engine, the battery voltage under load is likely below 11.8V — a strong sign it's on its last leg."
      },
      {
        h: '2. Dimming headlights at idle',
        p: 'Headlights that visibly brighten when you rev the engine suggest the alternator is compensating for a weak battery.'
      },
      {
        h: '3. Doorstep Battery Test',
        p: 'FixMyCarHub arrives at your home or office within 30 minutes across Hyderabad. We load-test with a carbon-pile tester and replace only if needed.'
      }
    ]
  },
  {
    id: 'doorstep-car-repair-vs-workshop',
    title: 'Doorstep Car Repair vs Workshop: Which is Better?',
    category: 'Comparison',
    date: '02 Dec 2025',
    image: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1600',
    readTime: '5 min read',
    excerpt: 'A no-nonsense comparison of when to book a doorstep mechanic in Hyderabad and when to bring the car to a workshop.',
    author: 'FixMyCarHub Editorial',
    tags: ['Doorstep', 'Comparison'],
    content: [
      {
        h: 'What works well doorstep',
        p: 'AC gas top-ups, battery replacement, brake pad change, minor electrical repair, oil top-up, and diagnostics are completed in your parking within 30–90 minutes.'
      },
      {
        h: 'What needs a workshop',
        p: 'Wheel alignment/balancing, painting, denting, gearbox overhaul, clutch replacement, and full detailing need workshop lifts and paint booths.'
      },
      {
        h: 'The FixMyCarHub recommendation',
        p: 'Book a ₹599 doorstep inspection first. Our technician gives you a written estimate — 82% of jobs finish in your parking. We arrange free pick-up for the rest.'
      }
    ]
  },
  {
    id: 'car-ac-service-hyderabad-summer',
    title: 'Get Car AC Service in Hyderabad: What Breaks?',
    category: 'AC & Climate',
    date: '28 Nov 2025',
    image: 'https://images.pexels.com/photos/8985457/pexels-photo-8985457.jpeg?auto=compress&cs=tinysrgb&w=1600',
    readTime: '6 min read',
    excerpt: 'Hyderabad summers hit 42°C. Here is when to service your AC, what components fail most often and how genuine service works.',
    author: 'FixMyCarHub HVAC Team',
    tags: ['AC', 'Hyderabad', 'Summer'],
    content: [
      {
        h: 'The best month to service AC',
        p: 'March or first week of April — right before Hyderabad temperatures cross 38°C. AC service centres get flooded in May.'
      },
      {
        h: 'Top failures to watch for',
        p: '1. Cabin filter clogged with dust; 2. Low refrigerant/gas leak; 3. Blower motor bearing noise; 4. Compressor clutch coil failure.'
      },
      {
        h: 'Doorstep AC service',
        p: 'FixMyCarHub performs full AC service at your doorstep in about 60 minutes — vacuuming, gas top-up, filter clean, and cooling tests.'
      }
    ]
  },
  {
    id: 'pre-purchase-car-inspection-checklist',
    title: 'Buying a Used Car? Use Our 120-Point Inspection',
    category: 'Inspection',
    date: '25 Nov 2025',
    image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1600',
    readTime: '8 min read',
    excerpt: "Don't inherit someone else's headache. Check out the 120-point pre-purchase checklist our experts run before you buy.",
    author: 'FixMyCarHub Editorial',
    tags: ['Pre-Purchase', 'Buying Guide'],
    content: [
      {
        h: 'Engine & Electrical check',
        p: 'Cold-start diagnostics, mounts vibration, blow-by evaluation, and extensive OBD-II code scans for hidden errors.'
      },
      {
        h: 'Suspension & Body paint',
        p: 'Dampers leak checks, control arms bushes wear, panel gaps mismatch, and paint thickness depth scans (detecting repaint/accidents).'
      },
      {
        h: 'Get a Written Report',
        p: 'Our pre-purchase doorstep inspection is completely transparent, providing a 120-point report with photographs so you buy with confidence.'
      }
    ]
  },
  {
    id: 'brake-pad-warning-signs',
    title: '7 Brake Pad Warning Signs You Should Never Ignore',
    category: 'Safety',
    date: '22 Nov 2025',
    image: 'https://images.unsplash.com/photo-1696494561430-de087dd0bd69?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    readTime: '4 min read',
    excerpt: "That squeaking sound isn't decorative. Here is how brake pads warn you before they fail — and what to do about it.",
    author: 'FixMyCarHub Safety Team',
    tags: ['Brakes', 'Safety'],
    content: [
      {
        h: '1. Squealing or grinding',
        p: 'Most modern pads have a metal wear indicator. Metal-on-metal grinding means pads are completely gone and rotors are getting scored.'
      },
      {
        h: '2. Spongy pedal & vibration',
        p: 'Vibrations under braking suggest warped rotors from heavy heat. A spongy pedal means air in fluid or line pressure leakage.'
      },
      {
        h: '3. Doorstep Brake Inspections',
        p: 'Book a doorstep checkup. FixMyCarHub mechanics can replace brake pads and top-up fluids directly in your parking area.'
      }
    ]
  },
  {
    id: 'monsoon-car-care-hyderabad',
    title: 'Monsoon Car Care: Tips for Hyderabad Drivers',
    category: 'Care',
    date: '18 Nov 2025',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
    readTime: '5 min read',
    excerpt: "From waterlogged basements to flyover puddles — here's how to protect your car during Hyderabad monsoons.",
    author: 'FixMyCarHub Editorial',
    tags: ['Monsoon', 'Hyderabad', 'Care'],
    content: [
      {
        h: '1. Replace wiper blades',
        p: 'Streaks and juddering reduce visibility. Swap them out before June to stay safe in sudden downpours.'
      },
      {
        h: '2. Underbody anti-rust protection',
        p: 'Moisture from flyover water pools speeds up rust on chassis joints. Get anti-rust underbody treatment.'
      },
      {
        h: '3. Submerged engine warning',
        p: 'Never attempt to restart a car submerged in water. Hydrolocking will instantly bend piston rods and destroy the engine.'
      }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'small',
    name: 'Small Business',
    price: 1499,
    period: 'Month',
    features: [
      'Periodic Maintenance Service',
      'Tire Repair and Replacement',
      'General Auto Repair & Maintenance',
      'Steering and Suspension Work',
    ],
  },
  {
    id: 'large',
    name: 'Large Business',
    price: 2999,
    period: 'Month',
    features: [
      'Tire Repair and Replacement',
      'Periodic Maintenance Service',
      'General Auto Repair & Maintenance',
      'Steering and Suspension Work',
      'Priority 24/7 Roadside SOS Help',
    ],
    isPopular: true,
  },
  {
    id: 'big',
    name: 'Big Business',
    price: 4999,
    period: 'Month',
    features: [
      'Tire Repair and Replacement',
      'Periodic Maintenance Service',
      'General Auto Repair & Maintenance',
      'Steering and Suspension Work',
      'Priority 24/7 Roadside SOS Help',
      'Premium OEM Engine & AC Protection',
    ],
  },
];

export const FAQS_DATA: Faq[] = [
  {
    q: "How much do you charge for a car inspection?",
    a: "A flat ₹599 inspection charge applies whether the vehicle is at your home, roadside, garage, office or apartment. This covers a thorough diagnostic and a written estimate.",
  },
  {
    q: "How are repair charges calculated?",
    a: "Repair charges depend on parts, labour and complexity. After the ₹599 inspection you receive a transparent quote — no work begins without your explicit approval.",
  },
  {
    q: "Do you provide 24×7 roadside assistance?",
    a: "Yes. Our SOS unit is on standby 24×7 across Hyderabad and nearby areas with an average response time of 30 minutes.",
  },
  {
    q: "Which brands and models do you service?",
    a: "All Indian and international brands — hatchbacks, sedans, SUVs, luxury cars and commercial vehicles including Maruti, Hyundai, Honda, Toyota, Kia, Mahindra, Tata, VW, Skoda, BMW, Mercedes-Benz, Audi, Land Rover, Jaguar and more.",
  },
  {
    q: "Can the mechanic come to my home or office?",
    a: "Yes. We offer full doorstep service in Hyderabad, Secunderabad and nearby suburbs. Choose Home / Office / Apartment / Roadside while booking.",
  },
  {
    q: "Do you use original spare parts?",
    a: "We use genuine OEM parts by default. Aftermarket or budget alternatives are only used when you specifically request and approve them.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: "Yes — eligible repairs carry a service warranty on parts and labour. The exact tenure depends on the type of repair and is stated on your invoice.",
  },
  {
    q: "Do you handle insurance claims?",
    a: "Absolutely. Our concierge team can coordinate cashless / reimbursement claims with most major insurers.",
  },
  {
    q: "How quickly can you reach me in an emergency?",
    a: "Our SOS team targets a 30-minute response inside Hyderabad city limits. Traffic and location can vary this slightly.",
  },
  {
    q: "Can you tow my car?",
    a: "Yes, we offer flatbed and hook-and-chain towing for accidents, breakdowns and inter-city relocation.",
  },
  {
    q: "Do you service electric vehicles?",
    a: "We handle high-voltage-safe diagnostics, brake systems, tyres, detailing and body work for most EVs. Battery pack service requires OEM coordination.",
  },
  {
    q: "How do I book a service?",
    a: "Tap ‘Book Inspection’, fill the 30-second form and the details are sent straight to our WhatsApp for instant confirmation.",
  },
  {
    q: "Can I get an estimate before booking?",
    a: "A precise estimate requires physical inspection. The ₹599 diagnostic gives you a written, itemised quote you can approve or decline freely.",
  },
  {
    q: "Do you offer pick-up and drop-off?",
    a: "Yes. Pick-up and drop-off is available on request across our service areas.",
  },
  {
    q: "Are your mechanics certified?",
    a: "Every technician is factory-trained and certified. Senior technicians handle luxury and premium vehicles.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, all major cards, net-banking and cash. GST invoice on request.",
  },
  {
    q: "Is the inspection charge adjusted against repair cost?",
    a: "The ₹599 inspection fee is a standalone diagnostic charge and is not adjusted against repair labour or parts.",
  },
  {
    q: "Can you help me buy a used car?",
    a: "Yes. Our pre-purchase inspection provides a 120-point report so you know exactly what you’re paying for.",
  },
  {
    q: "Do you offer corporate & fleet contracts?",
    a: "Yes. We run scheduled maintenance and priority-response plans for fleets, delivery companies and offices.",
  },
  {
    q: "How is my data handled?",
    a: "Your details are only used to service your booking. We never share personal information with third parties.",
  },
  {
    q: "Which areas of Hyderabad do you cover?",
    a: "Hyderabad, Secunderabad, Gachibowli, Madhapur, Kondapur, Kukatpally, Banjara Hills, Jubilee Hills, Hitech City, Miyapur, Ameerpet, LB Nagar and nearby areas.",
  },
  {
    q: "Can I get help outside working hours?",
    a: "Emergency SOS is 24×7. Workshop-based services run 8AM – 9PM. Reach us anytime via the Call/WhatsApp buttons.",
  },
];

export const TIMELINE_DATA = [
  { year: "2019", title: "The Idea", text: "Two automotive engineers frustrated with opaque garages set out to build a transparent, doorstep-first repair experience." },
  { year: "2020", title: "First Workshop", text: "Opened our flagship workshop in Hyderabad with a promise: no repair without customer approval." },
  { year: "2022", title: "24×7 SOS Fleet", text: "Launched round-the-clock roadside assistance with a dedicated tow-and-repair fleet." },
  { year: "2024", title: "5,000+ Happy Customers", text: "Certified as a preferred partner for major insurers and corporate fleets." },
  { year: "2026", title: "The FixMyCarHub App", text: "Rebuilt the booking experience for a cinematic, WhatsApp-native workflow you're using right now." },
];

export const HYDERABAD_AREAS = [
  'Madhapur',
  'Gachibowli',
  'Jubilee Hills',
  'Banjara Hills',
  'Kondapur',
  'Secunderabad',
  'Kukatpally',
  'Begumpet',
  'Hitech City',
  'Nampally',
  'Tolichowki',
  'Miyapur',
];
