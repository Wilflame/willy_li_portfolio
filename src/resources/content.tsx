import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Willy",
  lastName: "Li",
  name: `Chen Yen (Willy) Li`,
  role: "Mechanical Engineer",
  avatar: "/images/headshot.jpg",
  email: "0221willy@gmail.com",
  location: "America/Los_Angeles",
  languages: ["English", "Mandarin"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on mechanical R&D and robotics research.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/willy-li221",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Mechanical Engineering portfolio for ${person.name}`,
  headline: <>Transforming complex challenges into elegant engineering solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Current Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Underwater Robot - Urchin
        </Text>
      </Row>
    ),
    href: "/work/urchin", 
  },
  subline: (
    <>
      Mechanical Engineering R&D Intern at Wyatt Technology and Researcher at UCSB Hawkes Lab <br /> 
      focused on autonomous robotics, soft actuation, and thermal analysis.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Santa Barbara based mechanical engineer with a passion for building 
        physical systems that solve real-world problems. My experience ranges from 
        industrial R&D and thermal optimization to co-authoring robotics research 
        for presentation at RSS 2025.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Wyatt Technology (Waters Corporation)",
        timeframe: "June 2025 - Present",
        role: "Mechanical R&D Engineering Intern",
        achievements: [
          <>
            Designed and prototyped iterations of custom retainer rings and driver systems, 
            coordinating with Manufacturing to reduce metal shredding using Delrin models.
          </>,
          <>
            Developed adapter plates for valve retrofits and wrote Python scripts for 
            automated reliability testing via DC power supplies.
          </>,
          <>
            Optimized aluminum funnel geometry using Inventor Nastran heat-transfer analysis, 
            improving conduction by 10% and reducing temperature gradients.
          </>,
          <>
            Recreated failure modes on gas-removal instruments and authored Engineering Change 
            Documentation (DCO) for revised fluid pathways.
          </>,
        ],
        images: [],
      },
      {
        company: "Hawkes Research Lab, UCSB",
        timeframe: "Sept 2024 - Present",
        role: "Undergraduate Researcher",
        achievements: [
          <>
            Co-authored a workshop paper for RSS 2025 regarding transformable terrain robots.
          </>,
          <>
            Custom-fabricated a modular robot chassis from scratch, including 3D-printed motor 
            mounts, gears, shafts, and wheels for lightweight durability.
          </>,
          <>
            Developed Python control and data logging scripts on NVIDIA Jetson (Linux) for future 
            integration into ROS 2 autonomous operation.
          </>,
          <>
            Created a Blender API script to auto-generate 10,000+ terrains for simulation 
            and physical CNC fabrication.
          </>,
          <>
            Designed and fabricated Vine Robot Housing capable of withstanding 4 psi internal 
            pressure using laser-cut acrylic and custom motor systems.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of California, Santa Barbara",
        description: (
          <>
            B.S. in Mechanical Engineering. <br />
            Certifications: CSWA Mechanical Design (Solidworks), CPR/AED (American Red Cross).
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "CAD, Simulation & Software",
        description: <>Advanced modeling, FEA, and programming.</>,
        tags: [
          { name: "SolidWorks", icon: "solidworks" },
          { name: "Autodesk Inventor", icon: "autodesk" },
          { name: "Nastran/FEA", icon: "simulation" },
          { name: "Fusion 360/CAM", icon: "fusion360" },
          { name: "Python", icon: "python" },
          { name: "MATLAB", icon: "matlab" },
          { name: "Blender", icon: "blender" },
          { name: "Linux", icon: "linux" },
          { name: "Onshape", icon: "onshape" },
          { name: "COMSOL Simulation", icon: "comsol" },
        ],
        images: [],
      },
      {
        title: "Machining & Fabrication",
        description: <>Traditional and rapid prototyping.</>,
        tags: [
          { name: "3D Printing", icon: "3dprinting" },
          { name: "CNC Milling", icon: "cnc" },
          { name: "Lathe/Mill", icon: "lathe" },
          { name: "Laser Cutting", icon: "lasercut" },
          { name: "Soldering", icon: "soldering" },
          { name: "Vacuum Forming", icon: "vacuum" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Urchin", 
  title: `Autonomous Underwater Robot - Urchin`,
  description: `Designed and built a smartphone-controlled robot for cliff diving safety that collects real-time water depth, pressure, and temperature data.`,
};

export { person, social, newsletter, home, about, work };