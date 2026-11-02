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
  photo: '/images/hero.jpg',
};

export const hero = {
  tags: [
    'Technical Program Management',
    'Device & Software Releases',
    'Automotive & Embedded Systems',
    'AI/ML Research',
  ],
  headline: 'Technical Program Manager with a software engineering foundation — delivering connected products from firmware to cloud.',
  intro:
    'Nearly four years delivering vehicle software across firmware, apps, and cloud systems. Currently pursuing an M.S. in Computer Science while building mobile apps at Phase Technologies.',
};

export const numbers = [
  { value: 4, prefix: '~', suffix: '', label: 'Years delivering device software' },
  { value: 22, suffix: '+', label: 'Software releases led at MG Motor' },
  { value: 20000, suffix: '+', label: 'Vehicles reached by those releases' },
  { value: 120, suffix: '+', label: 'Issues driven to closure' },
  { value: 75.3, suffix: '%', decimals: 1, label: 'Fewer image tokens in my thesis experiments' },
];

export const about = {
  title: 'My journey across engineering, software delivery, and AI',
  paragraphs: [
    'I began with a bachelor’s degree in Electrical Engineering at The Maharaja Sayajirao University of Baroda in India.',
    'My first professional role was at MG Motor, where I tested vehicle features such as navigation, Bluetooth, driver assistance, and connected services. I later became Deputy Manager for Infotainment and Telematics, taking responsibility for software releases, supplier coordination, testing, and critical problems reported in customer vehicles.',
    'At Matter Motor Works, my work moved toward defining complete systems: the requirements, team responsibilities, security, and update flow needed to deliver vehicle software remotely.',
    'In January 2025, I began my M.S. in Computer Science at the University of Nevada, Reno, where my research looks at how much visual input a cloud AI model really needs for a task. Since May 2026, I have also been a Software Developer at Phase Technologies in Rapid City, where I own the delivery of the Phase Connect app.',
  ],
  closing:
    'Across these roles, I work on both the technical details and the coordination needed to deliver a product: understanding requirements, connecting teams, investigating failures, and checking that a release is ready.',
  glance: [
    { k: 'Now', v: 'Software Developer, Phase Technologies' },
    { k: 'Studying', v: 'M.S. Computer Science, UNR · Dec 2026' },
    { k: 'Focus', v: 'Releases, validation & connected devices' },
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
    theme: 'Bringing Phase Connect to release readiness',
    summary:
      'I own end-to-end delivery of Phase Connect, the company’s iOS and Android app for commissioning and controlling power-electronics field devices.',
    points: [
      'Took the app from non-functional to release-ready, working across the firmware, hardware, and cloud teams.',
      'Defined the device interface with firmware over BLE (Bluetooth Low Energy, using binary Protobuf messages) and Modbus, and built the MQTT link to the cloud.',
      'Defined the release process: automated versioning and release notes, merge-request review, and forced app updates.',
      'Run bug and release tracking, and test every release on real field devices.',
      'Introduced an AI-assisted workflow for features, test cases, unit tests, and review on every merge request.',
    ],
    tools: ['iOS & Android', 'BLE', 'Protobuf', 'Modbus', 'MQTT', 'Release process'],
  },
  {
    year: '2025',
    period: 'Jan 2025 – Present',
    place: 'Reno, NV',
    role: 'AI/ML Researcher',
    org: 'University of Nevada, Reno',
    theme: 'Researching how much a cloud AI model needs to see',
    summary:
      'My M.S. thesis studies how a device can send less visual input to a cloud vision-language model while keeping the evidence the task needs.',
    points: [
      'Thesis: task-aware selection of images and video frames on the device, from single images to short heart-ultrasound clips and hours-long capsule-endoscopy video.',
      'Built evaluation sets from labeled data (EchoNet-Dynamic, Kvasir-Capsule, Galar) with locked test sets and cross-validation.',
      'Ran multi-model evaluations (3 Gemini models × 60 images × 4 strategies); failure reviews caught a model bias and a frame-selection method that dropped key diagnostic frames, which led to a redesigned selector.',
      'Trained LSTM, CNN, and FNN models on labeled CAN traffic to detect intrusions in vehicle networks (95.1% accuracy).',
      'Graduate teaching assistant: led hands-on labs for 135 students across ENGR 100 and Applied Physics.',
    ],
    tools: ['Python', 'PyTorch', 'Gemini API', 'Evaluation design', 'Computer vision'],
  },
  {
    year: '2024',
    period: 'Jan 2024 – Dec 2024',
    place: 'India',
    role: 'Engineer, Infotainment & Cluster Systems',
    org: 'Matter Motor Works',
    theme: 'Defining remote updates from the cloud to the vehicle',
    summary:
      'I owned the definition of the OTA (over-the-air) update program — how new software travels from the cloud into the vehicle.',
    points: [
      'Wrote the complete OTA requirements across the web portal, cloud, and vehicle software, and assigned each team’s responsibilities.',
      'Designed the end-to-end OTA architecture and update flow with secure authentication and Azure DevOps CI/CD from build to vehicle, and validated it on ECUs. The design was later used to launch OTA updates in vehicles.',
      'Wrote instrument-cluster requirements to government regulatory norms.',
      'Built secure vehicle-to-cloud provisioning for Map and SIM services, and ran DFMEA to reduce failure modes early.',
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
    summary:
      'I owned the infotainment and telematics software release roadmap for the MG Astor, across factory production and OTA releases.',
    stats: [
      ['22+', 'releases'],
      ['20,000+', 'vehicles'],
      ['5', 'team members'],
      ['3', 'suppliers'],
      ['120+', 'issues closed'],
      ['8+', 'field issues solved'],
    ],
    points: [
      'Led 22+ software releases to 20,000+ vehicles; managed a team of five for testing and flashing, gated each release with a plant production trial run (PTR), and reported to General Managers and Directors.',
      'Managed three suppliers (infotainment software, maps, and cameras), including China-based teams across time zones, on builds, release schedules, and defect fixes.',
      'Drove 120+ issues to closure in JIRA and Azure DevOps.',
      'Resolved 8+ critical field issues on-site in Delhi, Mumbai, and Hyderabad — debugging customer vehicles from logs and driving root cause and corrective fixes with suppliers.',
      'Built CANoe and Vehicle Spy ECU test benches enabling ICAT certification and EMI-EMC compliance, and took the camera system through certification testing at ICAT.',
    ],
    tools: ['Release management', 'Supplier management', 'JIRA', 'Vector CANoe', 'Vehicle Spy'],
  },
  {
    year: '2021',
    period: 'Aug 2021 – Aug 2022',
    place: 'India',
    role: 'Graduate Engineer Trainee',
    org: 'JSW MG Motor India',
    theme: 'Testing the features people use in a vehicle',
    summary:
      'I began my career validating vehicle features and checking whether they worked as expected before they reached customers.',
    points: [
      'Validated ADAS (advanced driver-assistance systems), navigation, multimedia, and Bluetooth.',
      'Validated telematics features, including emergency calling (e-Call) and remote vehicle control.',
      'Automated JIRA bug tracking to support recording and following up on software problems.',
    ],
    tools: ['Verification & validation', 'ADAS', 'Telematics', 'JIRA'],
  },
  {
    year: '2017',
    period: 'Jul 2017 – May 2021',
    place: 'Vadodara, India',
    role: 'B.E. Electrical Engineering',
    org: 'The Maharaja Sayajirao University of Baroda',
    theme: 'Electrical engineering foundation',
    summary:
      'My electrical engineering education gave me the foundation for working with physical devices, control systems, and the software around them.',
    points: ['Graduated with a CGPA of 8.72 / 10.', 'Later applied this foundation to automotive electronics and connected products.'],
    tools: ['Electrical engineering', 'Embedded systems'],
  },
];

export const research = {
  title: 'Reducing the Visual Tax',
  subtitle:
    'Task-Aware Visual Input Selection for Cloud Vision-Language Models, from Images to Long Medical Video',
  meta: 'M.S. thesis · University of Nevada, Reno · Advisor: Dr. Rui Hu · December 2026',
  plain:
    'Every image or video frame sent to a cloud AI model costs input tokens, time, and bandwidth — I call this the “visual tax.” My thesis asks how the sending device can choose what to send, so the cloud model receives much less input but still sees the evidence the task needs.',
  stages: [
    {
      key: 'image',
      label: 'One image',
      lever: 'Ask for the right resolution',
      result: '75.3% fewer image tokens',
      detail:
        'On 250 screenshot tasks, requesting low resolution cut the logged image tokens by 75.3%, with the mean task score changing by only −0.4%. On 150 medical images the drop was 1.7%, but with wider uncertainty.',
    },
    {
      key: 'short',
      label: 'Short video',
      lever: 'Pick the frames that matter',
      result: '4 frames out of 177',
      detail:
        'For heart-ultrasound (echocardiography) clips, a selector with no learned parameters keeps 4 frames and places them closer to the labelled cardiac phases than uniform sampling, evaluated on 1,276 studies.',
    },
    {
      key: 'long',
      label: 'Long video',
      lever: 'Score on device, send a montage',
      result: '92.9% fewer input tokens',
      detail:
        'For hours-long capsule-endoscopy video, a ResNet-18 scorer on the device picks 16 frames and packs them into one montage image — 92.9% fewer input tokens than sending them separately. From these montages the cloud model flagged 17 of 21 studies with findings, versus 4 of 21 with uniformly chosen frames.',
    },
  ],
  honest:
    'These results support budgeted evidence selection and large reductions in visual input. They do not establish reliable diagnosis — the clinician stays responsible for the review.',
  other: [
    {
      title: 'Deep Learning for CAN Bus Intrusion Detection',
      text: 'Compared FNN, 1D-CNN, and LSTM models for detecting DoS, fuzzing, and spoofing attacks on vehicle networks — 95.1% accuracy (LSTM).',
      link: 'https://github.com/jmandalia99/Deep_Learning_CANBus',
    },
    {
      title: 'Multi-Layer LLM Guardrail System',
      text: 'Input filters and output safety checks that defend language models against prompt-injection and jailbreak attempts — 88.7% attack mitigation on AdvBench and JailbreakBench.',
      link: 'https://github.com/jmandalia99/Multi_Layer_LLM_Guardrail_System',
    },
  ],
};

// `star: true` = core strength (shown filled).
export const skills = [
  {
    group: 'Program & Release Management',
    items: [
      ['Technical Program Management', true],
      ['Program Management', true],
      ['Project Management', true],
      ['Release Management', true],
      ['Product Launch', true],
      ['Risk Management', true],
      ['Requirements Management', true],
      ['Vendor Management', true],
      ['Agile', true],
      ['Jira', true],
      ['Azure DevOps', true],
      ['Stakeholder Management'],
      ['Dependency Management'],
      ['Original Equipment Manufacturer (OEM)'],
      ['Software Development Life Cycle (SDLC)'],
    ],
  },
  {
    group: 'Validation & Reliability',
    items: [
      ['Verification and Validation', true],
      ['Root Cause Analysis', true],
      ['Debugging', true],
      ['Defect Tracking'],
      ['FMEA'],
      ['ADAS'],
      ['Vector CANoe'],
      ['Electromagnetic Compatibility'],
    ],
  },
  {
    group: 'Connected Vehicles & Devices',
    items: [
      ['Over-the-Air (OTA) Updates', true],
      ['Infotainment', true],
      ['Telematics', true],
      ['Controller Area Network (CAN)', true],
      ['Embedded Systems', true],
      ['Firmware', true],
      ['Internet of Things', true],
      ['Bluetooth'],
      ['MQTT'],
      ['Modbus'],
      ['Electrical Engineering'],
    ],
  },
  {
    group: 'Software, Cloud & AI',
    items: [
      ['Python', true],
      ['CI/CD', true],
      ['Machine Learning', true],
      ['Generative AI', true],
      ['C'],
      ['C++'],
      ['Mobile Application Development'],
      ['Android'],
      ['iOS'],
      ['DevOps'],
      ['GitHub Actions'],
      ['Docker'],
      ['Git'],
      ['GitHub'],
      ['Microsoft Azure'],
      ['Amazon Web Services'],
    ],
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of Nevada, Reno',
    period: 'Jan 2025 – Dec 2026 (expected)',
    score: 'GPA 3.9 / 4.0',
    note: 'Thesis track — “Reducing the Visual Tax,” advised by Dr. Rui Hu.',
  },
  {
    degree: 'B.E. Electrical Engineering',
    school: 'The Maharaja Sayajirao University of Baroda',
    period: 'Jul 2017 – May 2021',
    score: 'CGPA 8.72 / 10',
    note: 'Electrical systems, embedded programming, control systems, and automotive electronics.',
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
  { title: 'Highest Potential Employee', tag: 'MG Motor', by: 'Recognized across the PE department for performance, ownership, and long-term impact' },
  { title: 'MG Astor — CSI Rank #1', tag: 'Contributor', by: 'Resolved nationwide infotainment & telematics issues behind the brand’s No. 1 Customer Satisfaction Index ranking' },
];

export const beyond = [
  {
    key: 'dance',
    title: 'Bharatanatyam',
    tag: '6 years completed',
    text: 'Six years of training in this classical Indian dance. It taught me discipline, rhythm, and how to tell a story without words.',
  },
  {
    key: 'hike',
    title: 'Hiking',
    tag: 'Mountain trails',
    text: 'Trails, national parks, and long views — the photo at the top of this page was taken on one of them.',
  },
  {
    key: 'travel',
    title: 'Visiting new places',
    tag: 'Always planning the next one',
    text: 'New cities, coastlines, and cultures. Seeing how other places work is how I recharge.',
    image: '/images/travel.jpg',
  },
];
