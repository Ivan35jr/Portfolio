// Central place to edit all portfolio content.

export const profile = {
  country: "Malaysia",
  role: "Software Developer",
  accent: "Portfolio",
  firstName: "Chin",
  lastName: "Jin Ren",
  fullName: "Chin Jin Ren",
  tagline:
    "A dedicated software developer with a strong interest in building efficient and user-friendly systems. I enjoy solving problems through code and continuously improving my skills by learning new technologies and tools.",
  bio: "I have experience working with different programming languages, data processing, and building scalable backend solutions. I am always eager to take on new challenges and grow both personally and professionally in the field of software development.",
  facts: [
    { label: "Education", value: "BCS in Computer Science, Sunway University" },
    { label: "CGPA", value: "3.69" },
    { label: "Birthdate", value: "30 May 2003" },
    {
      label: "Strengths",
      value: "Communication, Teamwork, Critical Thinking, Passionate Learner",
    },
  ],
};

export const education = [
  {
    period: "Before 2021",
    school: "SMK Sinar Bintang",
    summary: "SPM: 1A+, 3A, 4A-, 2B+, 1B",
    courses: ["Physics", "Chemistry", "Add Maths", "Accounting", "Seni"],
    highlight: false,
  },
  {
    period: "Aug 2021 – Jul 2023",
    school: "INTI College Subang",
    summary: "Diploma in Information Technology",
    CGPA: "3.74",
    courses: ["Data Structures", "Structured Programming", "Rapid Application Development"],
    highlight: false,
  },
  {
    period: "Sept 2023 – Mar 2026",
    school: "Sunway University",
    summary: "BSc (Hons) in Computer Science",
    CGPA: "3.69",
    courses: ["Object Oriented Programming", "Web Fundamentals", "Software Engineering"],
    highlight: true,
  },
];

export type Project = {
  slug: string;
  images: string[];
  index: string;
  name: string;
  description: string;
  stack: string[];
  link: string;
  repo?: string;
  timeline: string;
  role: string;
  summary: string;
  problem: string;
  approach: string;
  highlights: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "optometry-ecommerce-clinic-platform",
    images: ["/images/Optometry/1.png", "/images/Optometry/2.png", "/images/Optometry/3.png", "/images/Optometry/4.png", "/images/Optometry/5.png", "/images/Optometry/6.png", "/images/Optometry/7.png", "/images/Optometry/8.png",],
    index: "01",
    name: "Optometry E-Commerce & Clinic Platform",
    description:
      "A full-stack Django platform for an optical care business, combining eyewear shopping, appointment booking, and a RAG-powered AI chatbot with a complete admin back office.",
    stack: [
      "Python",
      "Django",
      "JavaScript",
      "HTML/CSS",
      "LangChain",
      "FAISS",
      "LLaMA 3 (IBM Watsonx)",
      "BeautifulSoup4",
      "Selenium",
    ],
    link: "#",
    repo: "#",
    timeline: "Add your project timeline",
    role: "Solo Full-Stack Developer",
    summary:
      "A complete digital ecosystem for an optical care business, serving both customers (eyewear shopping, appointment booking, AI chatbot) and administrators (inventory, sales, customer management), built on a real product dataset gathered through custom web scraping.",
    problem:
      "Optical businesses often run their online store, appointment booking, and customer support as separate, disconnected tools, with no easy way for customers to get accurate answers to optical questions or for staff to see inventory and sales in one place. This project set out to build a single platform covering the full customer journey, backed by a real scraped product catalog instead of placeholder data.",
    approach:
      "On the customer side, built registration/login, a paginated and filterable eyewear product gallery, a shopping cart with a full checkout flow, and a real-time calendar for booking optometrist consultations. Added a RAG-based AI chatbot that answers optical questions using an authoritative PDF (Optometry.pdf) as its only knowledge source, plus a profile area for order history, prescriptions, and upcoming appointments. On the admin side, built a separate secure login and a back office for customer management, real-time inventory monitoring, sales/transaction tracking, and a business insights dashboard.",
    highlights: [
      "Built a custom Python web scraper (Requests, BeautifulSoup4, Selenium) to extract real product data — brand, name, price, images, specs — from Focus Point Malaysia's website, using ThreadPoolExecutor for concurrent scraping",
      "Built a RAG chatbot with LangChain, a FAISS vector store, and HuggingFace embeddings (all-MiniLM-L6-v2), generating answers with IBM Watsonx's LLaMA 3 (70B) grounded strictly in the source PDF to prevent hallucinations",
      "Designed a responsive HTML/CSS/JavaScript frontend for both the customer storefront and admin portal",
      "Implemented the backend on Django's MVT architecture with SQLite/PostgreSQL for data persistence",
    ],
    outcome:
      "This was my first end-to-end project spanning frontend, backend, database, and AI in one system. It taught me how to integrate an LLM into a real application using RAG, how to scrape and clean a real-world dataset responsibly, and the value of prototyping the UX in Figma before writing any code.",
  },
  {
    slug: "space-rental-management-system",
    images: ["/images/Space Rental/1.png", "/images/Space Rental/2.png", "/images/Space Rental/3.png", "/images/Space Rental/4.png", "/images/Space Rental/5.png"],
    index: "02",
    name: "Space Rental Management System",
    description:
      "A console-based C++ system for renting storage units and event halls, with role-based access for staff and admins, automated pricing, and file-backed data persistence.",
    stack: ["C++", "File I/O", "Linked Lists", "OOP", "Dynamic Arrays"],
    link: "#",
    repo: "#",
    timeline: "Add your project timeline",
    role: "Solo Developer",
    summary:
      "A comprehensive console-based system for managing space rentals (e.g. storage units, event halls), serving two user roles — staff and administrators — who can rent spaces, view booking information, edit or cancel existing bookings, and manage their own account details.",
    problem:
      "Renting out shared spaces by hand makes it easy to lose track of who booked what, miscalculate rental fees across different-length bookings, and apply deposit or cancellation penalty rules inconsistently — especially without a database to fall back on.",
    approach:
      "Built a login and registration system with password validation and duplicate-ID checking, storing credentials in spacerentaluser.txt. Staff can rent 'Mini Spaces' or 'Big Spaces' (capped at 10 each), with rental fees calculated from duration using 30-day months and a fixed RM100 deposit rule. Wrote custom date validation, leap-year handling, and end-date computation (adding months to a start date) without relying on external date libraries. All booking records persist to spacerental.txt, and are loaded into a singly linked list for in-memory editing and cancellation, including prorated refunds, early-cancellation/overstay penalty calculations, and detailed fee receipts.",
    highlights: [
      "Implemented a singly linked list to manage booking data in memory for edit/cancel operations",
      "Built a custom DynamicArray class to hold collections of SpaceRental objects",
      "Wrote static utility methods for input validation (integers, strings, date formats)",
      "Used stringstream to parse CSV-style booking records from text files",
    ],
    outcome:
      "This project taught me how to structure a multi-file C++ project with proper header/source separation, how to manage memory manually (new/delete) for a linked list, and how to translate real business logic — pricing, penalties, deposits — into working code.",
  },
  {
    slug: "hotel-del-luna-reservation-system",
    images: ["/images/Hotel/1.png", "/images/Hotel/2.png", "/images/Hotel/3.png", "/images/Hotel/4.png", "/images/Hotel/5.png"],
    index: "03",
    name: "Hotel Del Luna — Room Reservation System",
    description:
      "A C++ hotel management system simulating a real hotel environment, with room types, automatic pricing, random room assignment, and separate customer and admin interfaces.",
    stack: ["C++", "File I/O", "OOP", "Structs", "Arrays"],
    link: "#",
    repo: "#",
    timeline: "Add your project timeline",
    role: "Solo Developer",
    summary:
      "A hotel management system that lets customers book rooms, view their reservations, and manage their personal information, while administrators can handle all bookings, update records, and delete entries — simulating a real hotel environment with room types, pricing, and automatic room number assignment.",
    problem:
      "Small hotel-style booking workflows are often managed manually with no easy way to look up, update, or safely delete a specific reservation, or to separate what admins vs. customers should be able to do.",
    approach:
      "Built dual menu-driven interfaces with different permission levels for customers and admins, covering three room types — Single (RM150.50/night), Double (RM240.20/night), and Family (RM300.50/night). The booking process collects username, password, phone number, days of stay, and room type, then auto-generates a random room number (1–100). Customers can book a room and view all of their own bookings (supporting multiple bookings per user) and personal info. Admins can book on behalf of any customer, search bookings by name, view every booking in a formatted table, update existing bookings, and delete entries — all backed by customer.txt in CSV format, with a password-protected admin login (attempt-limited) guarding the admin menu.",
    highlights: [
      "Used a dynamic 2D array (string**) to render all bookings in a structured table view",
      "Used transform() for case-insensitive username handling",
      "Implemented safe file operations — reading, writing, and a temporary file (temp.txt) for safe updates and deletions",
      "Used random number generation (rand() % 100 + 1) to assign unique room numbers",
    ],
    outcome:
      "This project taught me struct-based OOP in C++ (including nested structs), how to modify files safely using a temporary file instead of editing in place, and how to build a menu-driven console application with system(\"cls\") and system(\"pause\") for a cleaner UI flow.",
  },
  {
    slug: "pastry-ville",
    images: ["/images/Pastry Ville/1.png", "/images/Pastry Ville/2.png", "/images/Pastry Ville/3.png", "/images/Pastry Ville/4.png"],
    index: "04",
    name: "Pastry Ville",
    description:
      "A static recipe website for baking enthusiasts, with a homepage, a recipe collection of detailed cards, and a contact form — built with a focus on both design and usability.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "#",
    repo: "#",
    timeline: "Add your project timeline",
    role: "Solo Developer / Designer",
    summary:
      "A static recipe website designed for baking enthusiasts who appreciate both beautiful design and functional layouts, featuring a welcoming homepage, a recipe collection with detailed cards, and a contact page for user inquiries.",
    problem:
      "Many recipe sites are cluttered or hard to browse; this project set out to present baking recipes in a clean, visually appealing layout that's still easy to scan.",
    approach:
      "Designed and built a three-page static site: a welcoming homepage to set the tone, a recipe collection page with detailed, consistent recipe cards, and a contact page with a form for user inquiries. Focused on a consistent visual identity and a functional, easy-to-scan card layout across the recipe collection.",
    highlights: [
      "Designed a cohesive visual identity across all three pages",
      "Built a reusable recipe card layout for the collection page",
      "Implemented a working contact form for user inquiries",
    ],
    outcome:
      "Add a real outcome here — e.g. feedback you got on the design, or a link to the live site once hosted.",
  },
  {
    slug: "calculator-app",
    images: ["/images/Calculator App/1.png", "/images/Calculator App/2.png", "/images/Calculator App/3.png", "/images/Calculator App/4.png"],
    index: "05",
    name: "Calculator App",
    description:
      "A Java console-based calculator supporting standard and unary operations, with automatic history tracking and the option to reuse the previous answer.",
    stack: ["Java", "CLI"],
    link: "#",
    repo: "#",
    timeline: "Add your project timeline",
    role: "Solo Developer",
    summary:
      "A Java console-based calculator with basic arithmetic operations, unary operations, automatic history tracking, and the ability to reuse the previous result in a new calculation.",
    problem:
      "Simple console calculators often lose context between calculations — no memory of past results and no easy way to chain a new operation off the last answer.",
    approach:
      "Built a Java CLI supporting six binary operators — addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and exponentiation (^) — plus three unary operators: square root (r), absolute value (A), and base-10 logarithm (L). Every calculation is automatically saved to a history list, and the user can opt to reuse the previous answer as an input to the next calculation. Added input validation to gracefully handle invalid input and division by zero.",
    highlights: [
      "Implemented 6 binary operators (+, -, *, /, %, ^) and 3 unary operators (r: √, A: abs, L: log10)",
      "Automatically tracked calculation history for the session",
      "Added a 'use previous answer' option to chain calculations together",
      "Handled invalid input and division-by-zero errors without crashing",
    ],
    outcome:
      "Add a real outcome here — e.g. how many calculations it's handled end-to-end, or what you'd add next (e.g. trig functions).",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frameworks & Tools",
    items: ["React", "Node.js", "Express", "Git", "Docker", "Figma"],
  },
  {
    title: "Concepts",
    items: ["Data Structures", "REST APIs", "OOP", "Agile / Scrum", "Testing"],
  },
];

export const experience = [
  {
    period: "2025",
    role: "Software Engineering Intern",
    org: "Add your company name",
    summary:
      "Placeholder role — replace with a short line on what you built, shipped, or improved.",
  },
  {
    period: "2024",
    role: "Freelance Web Developer",
    org: "Self-employed",
    summary:
      "Placeholder role — replace with a short line about the clients or projects you supported.",
  },
];

export const nav = [
  { label: "Welcome", href: "#welcome" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Works & Skills", href: "#skills" },
];

export const socials = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];
