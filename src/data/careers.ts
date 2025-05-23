export interface Exam {
  name: string;
  description: string;
  officialWebsite?: string;
}

export interface JobType {
  title: string;
  description: string;
  averageSalary?: string;
}

export interface CareerPath {
  id: string;
  name: string;
  description: string;
  exams: Exam[];
  jobTypes: JobType[];
}

export const careerPaths: CareerPath[] = [
  // ENGINEERING
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Technical careers involving design, development and innovation across multiple disciplines.',
    exams: [
      { 
        name: 'JEE Main', 
        description: 'For NITs/IIITs/GFTIs engineering admissions', 
        officialWebsite: 'https://jeemain.nta.nic.in' 
      },
      { 
        name: 'JEE Advanced', 
        description: 'For IIT admissions', 
        officialWebsite: 'https://jeeadv.ac.in' 
      },
      { 
        name: 'State Engineering Entrances', 
        description: 'MH-CET, WBJEE, etc. for state colleges', 
        officialWebsite: 'https://en.wikipedia.org/wiki/List_of_Engineering_Entrance_Exams_in_India' 
      }
    ],
    jobTypes: [
      {
        title: 'Computer Engineer',
        description: 'Hardware/software development and testing',
        averageSalary: '₹5-25 LPA'
      },
      {
        title: 'Civil Engineer',
        description: 'Infrastructure design and construction',
        averageSalary: '₹4-15 LPA'
      },
      {
        title: 'Electrical Engineer',
        description: 'Works on electrical systems, circuits, and power generation',
        averageSalary: '₹4-9 LPA'
      },
      {
        title: 'Automobile Engineer',
        description: 'Vehicle design and manufacturing',
        averageSalary: '₹4-12 LPA'
      },
      {
        title: 'Chemical Engineer',
        description: 'Applies chemical processes in industries like pharma, oil, and energy',
        averageSalary: '₹5-11 LPA'
      },
      {
        title: 'Biotech Engineer',
        description: 'Combines biology and technology to develop products in healthcare and agriculture',
        averageSalary: '₹4-10 LPA'
      },
      {
        title: 'Aerospace Engineer',
        description: 'Designs aircraft, spacecraft, and related systems',
        averageSalary: '₹6-15 LPA'
      },
      {
        title: 'Environmental Engineer',
        description: 'Works on sustainable solutions for environmental protection',
        averageSalary: '₹3.5-8 LPA'
      },
      {
        title: 'Industrial Engineer',
        description: 'Optimizes production processes, systems, and organizations',
        averageSalary: '₹4-9 LPA'
      }
    ]
  },

  // MEDICAL
  {
    id: 'medical',
    name: 'Medical',
    description: 'Healthcare professions focused on patient treatment and wellbeing.',
    exams: [
      { 
        name: 'NEET UG', 
        description: 'For MBBS/BDS admissions', 
        officialWebsite: 'https://neet.nta.nic.in' 
      },
      { 
        name: 'AIIMS MBBS', 
        description: 'For AIIMS medical colleges', 
        officialWebsite: 'https://www.aiimsexams.ac.in' 
      },
      { 
        name: 'JIPMER', 
        description: 'For Jawaharlal Institute admissions', 
        officialWebsite: 'https://jipmer.edu.in' 
      }
    ],
    jobTypes: [
      {
        title: 'Medical Doctor (MBBS)',
        description: 'Diagnose and treat illnesses',
        averageSalary: '₹8-30 LPA'
      },
      {
        title: 'Dentist (BDS)',
        description: 'Oral health specialist',
        averageSalary: '₹6-20 LPA'
      },
      {
        title: 'Ayurvedic Doctor (BAMS)',
        description: 'Practice traditional medicine',
        averageSalary: '₹5-18 LPA'
      }
    ]
  },

  // GOVERNMENT JOBS
  {
    id: 'government-jobs',
    name: 'Government Jobs',
    description: 'Secure public sector employment with benefits.',
    exams: [
      { 
        name: 'SSC CHSL', 
        description: '10th level government posts', 
        officialWebsite: 'https://ssc.nic.in' 
      },
      { 
        name: 'Railway Group D', 
        description: 'Railway technical staff', 
        officialWebsite: 'https://indianrailways.gov.in' 
      },
      { 
        name: 'Indian Army Soldier', 
        description: 'Defense force recruitment', 
        officialWebsite: 'https://joinindianarmy.nic.in' 
      }
    ],
    jobTypes: [
      {
        title: 'Government Clerk',
        description: 'Administrative office work',
        averageSalary: '₹3-6 LPA'
      },
      {
        title: 'Railway Technician',
        description: 'Maintain railway systems',
        averageSalary: '₹3-7 LPA'
      },
      {
        title: 'Police Constable',
        description: 'Maintain law and order',
        averageSalary: '₹3-8 LPA'
      }
    ]
  },

  // ITI/VOCATIONAL
  {
    id: 'iti-vocational',
    name: 'ITI/Vocational',
    description: 'Skill-based technical training programs.',
    exams: [
      { 
        name: 'NCVT/SCVT', 
        description: 'Industrial training certification', 
        officialWebsite: 'https://www.ncvtmis.gov.in' 
      }
    ],
    jobTypes: [
      {
        title: 'Electrician',
        description: 'Install/maintain electrical systems',
        averageSalary: '₹3-6 LPA'
      },
      {
        title: 'Fitter',
        description: 'Machine assembly/maintenance',
        averageSalary: '₹3-7 LPA'
      },
      {
        title: 'Welder',
        description: 'Metal joining and fabrication',
        averageSalary: '₹3-8 LPA'
      }
    ]
  },

  // PARAMEDICAL
  {
    id: 'paramedical',
    name: 'Paramedical',
    description: 'Healthcare support professions.',
    exams: [
      { 
        name: 'NEET Paramedical', 
        description: 'For paramedical courses', 
        officialWebsite: 'https://neet.nta.nic.in' 
      }
    ],
    jobTypes: [
      {
        title: 'Lab Technician',
        description: 'Medical testing and analysis',
        averageSalary: '₹3-7 LPA'
      },
      {
        title: 'Radiology Assistant',
        description: 'Operate imaging equipment',
        averageSalary: '₹4-9 LPA'
      }
    ]
  },

  // MARINE
  {
    id: 'marine',
    name: 'Marine Careers',
    description: 'Merchant navy and shipping industry jobs.',
    exams: [
      { 
        name: 'IMU CET', 
        description: 'For maritime courses', 
        officialWebsite: 'https://www.imu.edu.in' 
      }
    ],
    jobTypes: [
      
      {
        title: 'Marine Fitter',
        description: 'Ship maintenance',
        averageSalary: '₹5-12 LPA'
      },
      {
        "title": "Deck Cadet",
        "description": "Ship navigation crew responsible for assisting in the safe operation and navigation of the vessel under the supervision of senior officers.",
        "averageSalary": "₹6-15 LPA"
      },
      {
        "title": "Engine Cadet",
        "description": "Works in the engine department and assists in the maintenance and operation of the ship’s machinery and equipment.",
        "averageSalary": "₹6-12 LPA"
      },
      {
        "title": "Third Officer",
        "description": "A junior officer in the deck department who assists with navigation, cargo operations, and safety duties on the ship.",
        "averageSalary": "₹8-18 LPA"
      },
      {
        "title": "Second Officer",
        "description": "Responsible for navigation, watchkeeping, and assisting in cargo operations, as well as ensuring the safety and security of the vessel.",
        "averageSalary": "₹10-22 LPA"
      },
      {
        "title": "Chief Officer",
        "description": "A senior officer who oversees deck operations, including navigation, cargo handling, and crew management. Also responsible for safety and emergency procedures.",
        "averageSalary": "₹15-30 LPA"
      },
      {
        "title": "Captain (Master Mariner)",
        "description": "The senior-most officer on the ship responsible for overall operations, navigation, crew management, and ensuring the safety of the vessel and crew.",
        "averageSalary": "₹25-50 LPA"
      },
      {
        "title": "Marine Engineer",
        "description": "Responsible for the maintenance and operation of the engine room, machinery, and power systems of the ship.",
        "averageSalary": "₹8-25 LPA"
      },
      {
        "title": "Electrical Officer",
        "description": "Handles the maintenance and operation of electrical systems on the vessel, including power generation, distribution, and electrical equipment.",
        "averageSalary": "₹7-18 LPA"
      },
      {
        "title": "Naval Architect",
        "description": "Designs and ensures the structural integrity and safety of ships and marine structures, focusing on the ship’s construction and performance.",
        "averageSalary": "₹10-20 LPA"
      },
      {
        "title": "Ship Surveyor",
        "description": "Responsible for inspecting and ensuring that ships comply with safety standards and regulations, often working with classification societies or regulatory authorities.",
        "averageSalary": "₹12-25 LPA"
      },
      {
        "title": "Marine Superintendent",
        "description": "Oversees the operational aspects of a fleet of vessels, ensuring compliance with international regulations and overseeing crew performance.",
        "averageSalary": "₹15-35 LPA"
      },
      {
        "title": "Port Engineer",
        "description": "Manages maintenance activities at ports and harbors, ensuring that ships are well-maintained and operations run smoothly.",
        "averageSalary": "₹10-22 LPA"
      },
      {
        "title": "Safety Officer",
        "description": "Responsible for ensuring that the ship complies with international safety standards, conducting drills, and maintaining safety protocols onboard.",
        "averageSalary": "₹7-15 LPA"
      }
    ]
  },

  // ADDITIONAL FIELDS
  {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Hotel and tourism industry careers.',
    exams: [
      { 
        name: 'IHM Entrance', 
        description: 'Hotel management courses', 
        officialWebsite: 'https://www.ihm.ac.in' 
      }
    ],
    jobTypes: [
      {
        title: 'Hotel Staff',
        description: 'Front office/housekeeping',
        averageSalary: '₹2-5 LPA'
      }
    ]
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Store operations and sales.',
    exams: [],
    jobTypes: [
      {
        title: 'Sales Associate',
        description: 'Customer service and sales',
        averageSalary: '₹2-5 LPA'
      }
    ]
  },
  {
    id: 'beauty-wellness',
    name: 'Beauty & Wellness',
    description: 'Personal care and grooming services.',
    exams: [
      { 
        name: 'CIDESCO', 
        description: 'Beauty therapy certification', 
        officialWebsite: 'https://www.cidesco.com' 
      }
    ],
    jobTypes: [
      {
        title: 'Beautician',
        description: 'Hair/skin care services',
        averageSalary: '₹3-8 LPA'
      }
    ]
  }
];