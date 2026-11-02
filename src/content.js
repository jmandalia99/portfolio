// ─────────────────────────────────────────────────────────────
//  ALL WEBSITE TEXT LIVES HERE.
//  To change anything on the site, edit this file, then run:
//      npm run deploy
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Jinal Mandalia',
  location: 'Rapid City, SD',
  email: 'jinalmandaliausa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jinal-mandalia',
  github: 'https://github.com/jmandalia99',
  // Put a new resume at public/resume.pdf (same name) to update it.
  resume: '/resume.pdf',
  photo: '/images/jinal-portrait.jpg',
};

export const hero = {
  tags: [
    'Technical Program Management',
    'Device & Software Releases',
    'Automotive & Embedded Systems',
    'AI/ML Research',
  ],
  // **double stars** make a word bold anywhere on the site
  headline: 'Technical program and release lead — delivering **connected products** from **firmware to cloud**.',
  intro:
    '**~4 years** delivering connected-vehicle and device programs. Today I own delivery of the **Phase Connect app** at Phase Technologies while finishing my **M.S. in Computer Science** (Dec 2026).',
};

export const numbers = [
  { value: 4, prefix: '~', suffix: '', label: 'Years in connected-vehicle & device programs' },
  { value: 22, suffix: '+', label: 'Software releases led at MG Motor' },
  { value: 20000, suffix: '+', label: 'Vehicles reached by those releases' },
  { value: 120, suffix: '+', label: 'Issues driven to closure' },
  { value: 92.9, suffix: '%', decimals: 1, label: 'Fewer AI input tokens in my thesis' },
];

// Shown on the back of the photo (click the photo in the hero).
export const about = {
  title: 'Engineer turned program lead',
  lines: [
    'Started in **Electrical Engineering**, then grew at **MG Motor** from testing features to **leading infotainment & telematics releases**.',
    'Defined the **OTA update program** at Matter Motor Works; now I own delivery of the **Phase Connect app**.',
    'Finishing an **M.S. in Computer Science** at UNR, researching how to make **cloud AI cheaper to run**.',
  ],
  glance: [
    { k: 'Now', v: 'Phase Technologies' },
    { k: 'Studying', v: 'M.S. CS · UNR · Dec 2026' },
    { k: 'Based in', v: 'Rapid City, SD' },
    { k: 'Looking for', v: 'Technical Program Manager roles' },
  ],
};

// Newest first. `year` is the big number on the left of the timeline.
export const journey = [
  {
    year: '2026',
    period: 'May 2026 – Present',
    place: 'Rapid City, SD',
    role: 'Software Developer',
    org: 'Phase Technologies',
    theme: 'Bringing Phase Connect to release',
    summary: 'I own **end-to-end delivery** of Phase Connect, the iOS & Android app for commissioning power-electronics field devices.',
    points: [
      'Took the app from **non-functional to release-ready** across firmware, hardware and cloud teams.',
      'Set up the **release process** — versioning, release notes, review gates and forced updates.',
      'Run **bug & release tracking** and test every release on **real field devices**.',
    ],
    tools: ['iOS & Android', 'BLE', 'MQTT', 'Modbus', 'Release process'],
  },
  {
    year: '2025',
    period: 'Fall 2025 & Spring 2026',
    place: 'Reno, NV',
    role: 'Graduate Teaching Assistant',
    org: 'University of Nevada, Reno',
    theme: 'Taught 135 students in hands-on labs',
    summary: 'Led hands-on lab sessions for **135 undergraduates** across two courses.',
    stats: [
      ['135', 'students'],
      ['90', 'in ENGR 100'],
      ['45', 'in Physics I'],
    ],
    points: [
      '**ENGR 100** (Fall 2025): guided **90 first-year students** through engineering design labs.',
      '**Physics I labs** (Spring 2026): mechanics and thermodynamics for **45 students**.',
    ],
    tools: ['Teaching', 'Mentoring', 'Lab leadership'],
  },
  {
    year: '2025',
    period: 'Jan 2025 – Present',
    place: 'Reno, NV',
    role: 'AI/ML Researcher',
    org: 'University of Nevada, Reno',
    theme: 'How much does a cloud AI model need to see?',
    summary: 'My thesis cuts the **visual input sent to cloud AI** while keeping the evidence a task needs.',
    points: [
      'Up to **92.9% fewer input tokens** on long medical video; **75.3% fewer** on single images.',
      'Built **evaluation sets and failure reviews** that caught a model bias and led to a redesigned selector.',
      'Also built **CAN-bus intrusion detection (95.1%)** and an **LLM guardrail system (88.7%)**.',
    ],
    tools: ['Python', 'PyTorch', 'Gemini API', 'Evaluation design'],
  },
  {
    year: '2024',
    period: 'Jan 2024 – Dec 2024',
    place: 'India',
    role: 'Engineer, Infotainment & Cluster Systems',
    org: 'Matter Motor Works',
    theme: 'Defining over-the-air updates',
    summary: 'I owned the definition of the **OTA (over-the-air) update program** — how software travels from cloud to vehicle.',
    points: [
      'Wrote the **complete OTA requirements** and split responsibilities across portal, cloud and vehicle teams.',
      'Designed the **end-to-end update flow** with secure authentication and CI/CD — later used to **launch OTA in vehicles**.',
      'Wrote **instrument-cluster requirements** to regulatory norms and ran **DFMEA**.',
    ],
    tools: ['OTA', 'Azure DevOps', 'CI/CD', 'Requirements', 'DFMEA'],
  },
  {
    year: '2022',
    period: 'Aug 2022 – Jan 2024',
    place: 'India',
    role: 'Deputy Manager, Infotainment & Telematics',
    org: 'JSW MG Motor India',
    theme: 'Leading releases and solving field problems',
    summary: 'I owned the **infotainment & telematics release roadmap** for the MG Astor.',
    stats: [
      ['22+', 'releases'],
      ['20,000+', 'vehicles'],
      ['3', 'suppliers'],
      ['120+', 'issues closed'],
    ],
    points: [
      'Led **22+ releases to 20,000+ vehicles**, gating each with a **plant production trial run**; managed a **team of five**.',
      'Managed **3 suppliers**, including China-based teams, on builds, schedules and defect fixes.',
      'Solved **8+ critical field issues** on-site, driving root cause and fixes with suppliers.',
    ],
    tools: ['Release management', 'Supplier management', 'JIRA', 'Vector CANoe'],
  },
  {
    year: '2021',
    period: 'Aug 2021 – Aug 2022',
    place: 'India',
    role: 'Graduate Engineer Trainee',
    org: 'JSW MG Motor India',
    theme: 'Testing what drivers use every day',
    summary: 'Started my career **validating vehicle features** before they reached customers.',
    points: [
      'Validated **ADAS, navigation, multimedia and Bluetooth**.',
      'Validated **telematics** — emergency calling (e-Call) and remote vehicle control.',
    ],
    tools: ['Verification & validation', 'ADAS', 'Telematics'],
  },
  {
    year: '2017',
    period: 'Jul 2017 – May 2021',
    place: 'Vadodara, India',
    role: 'B.E. Electrical Engineering',
    org: 'The Maharaja Sayajirao University of Baroda',
    theme: 'Electrical engineering foundation',
    summary: 'Graduated with **CGPA 8.72 / 10** — my foundation for devices, control systems and embedded electronics.',
    points: [],
    tools: ['Electrical engineering', 'Embedded systems'],
  },
];

export const research = {
  title: 'Sending cloud AI only what it needs to see',
  official: 'Reducing the Visual Tax: Task-Aware Visual Input Selection for Cloud Vision-Language Models, from Images to Long Medical Video',
  meta: 'M.S. thesis · University of Nevada, Reno · Advisor: Dr. Rui Hu · Dec 2026',
  plain:
    'Every image or video frame sent to a cloud AI model costs **tokens, time and bandwidth**. My thesis lets the **device decide what to send**, so the model gets **far less input** but still sees what the task needs.',
  stages: [
    {
      key: 'image',
      label: 'One image',
      lever: 'Ask for the right resolution',
      big: '75.3%',
      unit: 'fewer image tokens',
      note: 'Task score changed by only **−0.4%** across 250 tasks.',
    },
    {
      key: 'short',
      label: 'Short video',
      lever: 'Pick the frames that matter',
      big: '4 of 177',
      unit: 'frames sent',
      note: 'Heart-ultrasound clips — closer to the key cardiac phases than even sampling, on **1,276 studies**.',
    },
    {
      key: 'long',
      label: 'Long video',
      lever: 'Score on device, send one montage',
      big: '92.9%',
      unit: 'fewer input tokens',
      note: 'Hours-long capsule video — flagged **17 of 21** studies with findings, vs **4 of 21** with even sampling.',
    },
  ],
  honest: 'A research result, not a diagnostic tool — the clinician stays responsible for the review.',
};

// Shown in the Projects section. `type` decides which filter tab it appears under.
export const projects = [
  {
    title: 'Multi-Layer LLM Guardrail System',
    icon: 'shield',
    type: 'ai',
    label: 'AI security · Research',
    impact: '88.7% attack mitigation',
    short: 'Protects large language models from **prompt-injection and jailbreak** attacks.',
    points: [
      'Layered defense: **input filters** before the model and **safety checks** after it.',
      '**88.7% defense rate** on AdvBench and JailbreakBench with low added latency.',
    ],
    tech: ['PyTorch', 'Python', 'LLM security'],
    github: 'https://github.com/jmandalia99/Multi_Layer_LLM_Guardrail_System',
    paper: 'https://drive.google.com/file/d/10MzYVQJg2qm0gSFjrZMiM_mvC6Ya9jbg/view?usp=share_link',
  },
  {
    title: 'Unified LLM Security Evaluation Framework',
    icon: 'target',
    type: 'ai',
    label: 'AI security · Research',
    impact: '6-dimension framework',
    short: 'A framework for judging how **vulnerable LLM apps** are to hidden malicious instructions.',
    points: [
      'Defined **six evaluation dimensions**, from stealth and adaptivity to attacker cost.',
      'Showed gaps in static benchmarks and proposed **adaptive testing** closer to real risk.',
    ],
    tech: ['Python', 'AI security', 'Evaluation design'],
    paper: 'https://drive.google.com/file/d/1NVlcWF7kTYA2tkTq-ImFOUbz8w0gv8Ad/view?usp=share_link',
  },
  {
    title: 'Medical Image Classification with Self-Supervised Learning',
    icon: 'microscope',
    type: 'ai',
    label: 'Computer vision · Research',
    impact: '2,000+ images',
    short: '“From Cats to Cysts” — **transfer learning vs self-supervised learning** on mammograms.',
    points: [
      'Pretrained self-supervised models (MAE, MoCo) on **2,000+ unlabeled medical images**.',
      'Found **supervised transfer learning (59.4%)** still wins on small medical datasets.',
    ],
    tech: ['PyTorch', 'MAE', 'MoCo', 'Computer vision'],
    github: 'https://github.com/jmandalia99/Medical_Image_Classification_with_SSL',
    paper: 'https://drive.google.com/file/d/1BSgUK7tllo0ABwXFvLheD6wwqForQ_KW/view?usp=share_link',
  },
  {
    title: 'Deep Learning for CAN Bus Intrusion Detection',
    icon: 'car',
    type: 'auto',
    label: 'Automotive security',
    impact: '95.1% accuracy',
    short: 'Detecting **attacks on a vehicle’s internal network** with deep learning.',
    points: [
      'Compared **FNN, CNN and LSTM** models on DoS, fuzzing and spoofing attacks.',
      '**95.1% (LSTM)** and **94.9% (CNN)** accuracy, beating the FNN baseline.',
    ],
    tech: ['PyTorch', 'LSTM', 'CNN', 'CAN'],
    github: 'https://github.com/jmandalia99/Deep_Learning_CANBus',
    paper: 'https://drive.google.com/file/d/1ZTxMYeDHJpJ4JrPUhfZCXLZmbgVNU9wW/view?usp=share_link',
  },
  {
    title: 'GenAI Chatbot with Multi-Model Routing & Observability',
    icon: 'sparkles',
    type: 'cloud',
    label: 'Generative AI · Cloud',
    impact: 'Full observability stack',
    short: 'A chatbot that **routes each question** to a fast or an accurate model, with live dashboards.',
    points: [
      '**Dynamic routing** between fast and accurate models.',
      '**Tracing and live metrics** with Jaeger, Prometheus and Grafana.',
    ],
    tech: ['Python', 'FastAPI', 'Prometheus', 'Grafana'],
    github: 'https://github.com/jmandalia99/GenAI_Chatbot_Demo_w_Metrics',
  },
  {
    title: 'Serverless Generative AI Web App — Recipe AI',
    icon: 'cloud',
    type: 'cloud',
    label: 'Generative AI · Cloud',
    impact: 'Deployed on AWS',
    short: 'Turns plain-language requests into recipes using **Claude on Amazon Bedrock**.',
    points: [
      '**Serverless** on AWS Amplify with Cognito sign-in.',
      '**CI/CD from GitHub** for automatic deployment.',
    ],
    tech: ['React', 'AWS Amplify', 'Amazon Bedrock', 'CI/CD'],
    github: 'https://github.com/jmandalia99/GenAI_Recipe_AI',
  },
  {
    title: 'Microcontroller-Based Data Acquisition System',
    icon: 'cpu',
    type: 'auto',
    label: 'Embedded systems',
    impact: 'Wind-solar hybrid',
    short: 'A **data-logging board** for a wind-solar hybrid system.',
    points: [
      'Built on an **M058 microcontroller**, programmed in C and Assembly.',
      'Logged **wind speed, solar irradiance and voltage** through an ADC.',
    ],
    tech: ['C', 'Assembly', 'Embedded systems'],
  },
];

export const skills = [
  {
    group: 'Program & Release Management',
    items: [
      'Technical Program Management',
      'Program Management',
      'Project Management',
      'Release Management',
      'Product Launch',
      'Risk Management',
      'Requirements Management',
      'Vendor Management',
      'Agile',
      'Jira',
      'Azure DevOps',
      'Stakeholder Management',
      'Dependency Management',
      'Original Equipment Manufacturer (OEM)',
      'Software Development Life Cycle (SDLC)',
    ],
  },
  {
    group: 'Validation & Reliability',
    items: [
      'Verification and Validation',
      'Root Cause Analysis',
      'Debugging',
      'Defect Tracking',
      'FMEA',
      'ADAS',
      'Vector CANoe',
      'Electromagnetic Compatibility',
    ],
  },
  {
    group: 'Connected Vehicles & Devices',
    items: [
      'Over-the-Air (OTA) Updates',
      'Infotainment',
      'Telematics',
      'Controller Area Network (CAN)',
      'Embedded Systems',
      'Firmware',
      'Internet of Things',
      'Bluetooth',
      'MQTT',
      'Modbus',
      'Electrical Engineering',
    ],
  },
  {
    group: 'Software, Cloud & AI',
    items: [
      'Python',
      'CI/CD',
      'Machine Learning',
      'Generative AI',
      'C',
      'C++',
      'Mobile Application Development',
      'Android',
      'iOS',
      'DevOps',
      'GitHub Actions',
      'Docker',
      'Git',
      'GitHub',
      'Microsoft Azure',
      'Amazon Web Services',
    ],
  },
  {
    group: 'Tools & Platforms',
    items: [
      'Vehicle Spy', 'CANalyzer', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain',
      'Gemini API', 'Claude API', 'OpenAI API', 'Amazon Bedrock', 'AWS Amplify', 'AWS Lambda',
      'Kubernetes', 'Jenkins', 'Grafana', 'Prometheus', 'React', 'Node.js', 'REST APIs',
      'MATLAB', 'Linux', 'Postman', 'NumPy', 'Pandas', 'OpenCV',
    ],
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of Nevada, Reno',
    period: 'Jan 2025 – Dec 2026 (expected)',
    score: 'GPA 3.9 / 4.0',
    note: '**Thesis track** — sending cloud AI only what it needs to see. Advisor: Dr. Rui Hu.',
    focus: ['AI', 'LLMs', 'Cloud', 'Cybersecurity', 'Computer vision'],
  },
  {
    degree: 'B.E. Electrical Engineering',
    school: 'The Maharaja Sayajirao University of Baroda',
    period: 'Jul 2017 – May 2021',
    score: 'CGPA 8.72 / 10',
    note: '**Electrical systems, embedded programming** and control systems.',
  },
];

const drive = (id) => `https://drive.google.com/file/d/${id}/view`;

export const certifications = [
  { name: 'Google Project Management Certificate', by: 'Google', status: 'In progress' },
  { name: 'Mastering CAN Network', by: 'Vector CANoe & CANalyzer', link: drive('1wg7CJXkxFo-Vdu4LSrkWctX-7IjSlvJ3') },
  { name: 'Automotive OTA Updates', by: 'Over-the-air update security & delivery', link: drive('1Eb4w2b4vCERUiJXmRsWw71Yv8BOD0BNa') },
  { name: 'DevOps CI/CD Fundamentals', by: 'Continuous integration & deployment', link: drive('1TmtnDVDOnhC3g87YqdFq9KtNZAOZr_sl') },
  { name: 'Software Development Life Cycle (SDLC)', by: 'Process & delivery fundamentals', link: drive('1X94VGP_naBpXt2moqnpS6aV1x8QbFdqU') },
  { name: 'Python Bootcamp', by: 'Advanced Python programming' },
];

export const recognition = [
  { title: 'Women Engineer of the Year', tag: 'Nominee', by: 'Digital Engineering Awards 2023' },
  { title: 'Highest Potential Employee', tag: 'MG Motor', by: 'Recognized across the **PE department**' },
  { title: 'Most new-feature ideas', tag: 'MG Motor', by: '**Top idea submitter** for next-gen features' },
  { title: 'MG Astor — CSI Rank #1', tag: 'Contributor', by: 'Fixed infotainment issues behind the **No. 1 customer-satisfaction** rank' },
];

// The big Bharatanatyam card in "Beyond work".
export const bharatanatyam = {
  title: 'Bharatanatyam',
  tag: '6 years of training',
  short: 'The classical dance I grew up with — **six years of training** as a child, and **back in class since 2026**.',
  // Where the dance card links to (Routes & Roots, the dance site).
  site: 'https://dance.jinalmandalia.com/',
  intro:
    'Bharatanatyam is the classical dance I grew up with. It taught me discipline, rhythm, and how to tell a story without words — and after a long break, I’m back in training.',
  journey: [
    {
      when: 'Childhood · 6 years',
      what: 'Trained from 1st to 6th standard and took the Gandharva Mahavidyalaya exams through Bruhad Gujarat Sangeet Samiti, Ahmedabad, reaching the Visharad Pratham level.',
    },
    {
      when: 'School years',
      what: 'Kept dancing through school, performing prayer dances up to 10th standard.',
    },
    {
      when: '2026 · Back to training',
      what: 'Restarted with Artgharana, working toward completing my Visharad.',
    },
  ],
  learning: [
    ['Learning', 'back in class with Artgharana, building my foundation step by step'],
    ['Understanding taal', 'how the Carnatic tala system works — talas, jaati, gati, and the three speeds'],
    ['Dance + technology', 'building tools that bring technology into Bharatanatyam — try them below'],
  ],
  instagram: { handle: '@routes._.roots', url: 'https://www.instagram.com/routes._.roots/' },
  // Dance + technology tools (the HTML files live in public/<folder>/index.html).
  tools: [
    { title: 'Taal practice tool', text: 'All 35 Suladi Sapta talas with a player — pick tala, jaati, gati and speed, and keep time as the beats light up.', href: '/taal/' },
    { title: 'Hasta Trainer', text: 'Record your own hastas on camera and build a personal hand-gesture model, right in the browser.', href: '/hasta-trainer/' },
    { title: 'Hasta Performer', text: 'Show a hasta to the camera and see it recognised live, with its name and viniyoga.', href: '/hasta-performer/' },
  ],
};

export const beyond = [
  {
    key: 'hike',
    title: 'Hiking',
    tag: 'Mountain trails',
    text: 'Trails, national parks and long views — the **mountains** are my favorite way to reset.',
  },
  {
    key: 'travel',
    title: 'Visiting new places',
    tag: 'Always planning the next one',
    text: 'New cities, coastlines and cultures — **seeing how other places work** is how I recharge.',
  },
];
