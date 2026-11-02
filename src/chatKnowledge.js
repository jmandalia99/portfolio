// ─────────────────────────────────────────────────────────────
//  WHAT THE "ASK ABOUT ME" CHAT KNOWS.
//  Each topic has: words people might type (keys), the answer, and
//  follow-up suggestions. **double stars** = bold, [text](link) = link.
//  Keys starting with ! count extra. Add a topic = add a block below.
// ─────────────────────────────────────────────────────────────

const EMAIL = 'jinalmandaliausa@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/jinal-mandalia';
const mail = `[${EMAIL}](mailto:${EMAIL})`;

export const greeting =
  'Hi! I can answer questions about **Jinal’s work, releases, research** and how to reach her. What would you like to know?';

export const starters = ['who', 'now', 'tpm', 'releases', 'thesis', 'contact'];

export const fallback =
  `I don’t have a good answer for that one yet. Try one of these — or ask Jinal directly at ${mail}.`;

export const topics = [
  {
    id: 'who',
    chip: 'Who is Jinal?',
    keys: ['who is', 'who are', 'about her', 'about jinal', 'introduce', 'introduction', 'yourself', 'herself', 'summary', 'background', 'tell me', 'overview', 'profile'],
    answer:
      'Jinal is a **technical program and release lead** with ~4 years delivering connected-vehicle and device programs — at MG Motor and Matter Motor Works in India, and now Phase Technologies in the US. She’s finishing an M.S. in Computer Science at UNR (Dec 2026) and is looking for **Technical Program Manager** roles.',
    follow: ['now', 'releases', 'tpm'],
  },
  {
    id: 'now',
    chip: 'What does she do now?',
    keys: ['!now', '!current', '!currently', 'present', 'today', '!phase', 'phase connect', 'where does she work', 'where is she working', 'work for', 'job', 'working', 'employer', 'company', 'app'],
    answer:
      'She’s at **Phase Technologies** in Rapid City, SD, where she owns **end-to-end delivery of the Phase Connect app** — the iOS & Android app for commissioning power-electronics field devices. She took it from non-functional to **release-ready**, set up the release process, and runs bug & release tracking.',
    follow: ['releases', 'lead', 'tpm'],
  },
  {
    id: 'tpm',
    chip: 'What roles is she looking for?',
    keys: ['!tpm', 'technical program', 'program manager', 'program management', '!looking', 'roles', 'role', 'hire', 'hiring', 'open to', 'opportunity', 'opportunities', 'job search', 'position', 'why', 'fit', 'next'],
    answer:
      'She’s looking for **Technical Program Manager** roles where releases, devices and people all need to come together. Her work has always sat between teams — owning release roadmaps, coordinating **firmware, hardware, cloud and suppliers**, gating releases and driving issues to closure.',
    follow: ['releases', 'suppliers', 'contact'],
  },
  {
    id: 'releases',
    chip: 'Release experience',
    keys: ['!release', '!releases', 'launch', 'launches', 'ship', 'shipping', 'rollout', 'roadmap', 'ptr', 'production', 'deliver', 'delivery', 'go live'],
    answer:
      'At JSW MG Motor she owned the infotainment & telematics release roadmap for the MG Astor: **22+ software releases to 20,000+ vehicles**, each gated by a plant production trial run, with a **team of five** for testing and flashing. Today she runs the **release process for Phase Connect**.',
    follow: ['suppliers', 'field', 'ota'],
  },
  {
    id: 'suppliers',
    chip: 'Working with suppliers',
    keys: ['!supplier', '!suppliers', '!vendor', 'vendors', 'china', 'stakeholder', 'stakeholders', 'coordinate', 'coordination', 'cross functional', 'partners', 'time zones'],
    answer:
      'At MG Motor she managed **3 suppliers** — infotainment software, maps and cameras — including **China-based teams across time zones**, on builds, release schedules and defect fixes, and reported to **General Managers and Directors**.',
    follow: ['releases', 'field', 'lead'],
  },
  {
    id: 'ota',
    chip: 'OTA updates',
    keys: ['!ota', 'over the air', 'update', 'updates', '!matter', 'cloud to vehicle', 'firmware update'],
    answer:
      'At Matter Motor Works she owned the definition of the **OTA (over-the-air) update program**: she wrote the complete requirements, split responsibilities across portal, cloud and vehicle teams, and designed the end-to-end update flow. The design was later used to **launch OTA updates in vehicles**.',
    follow: ['releases', 'automotive', 'now'],
  },
  {
    id: 'field',
    chip: 'Solving field issues',
    keys: ['!field', 'debug', 'debugging', 'root cause', '!issue', 'issues', 'bug', 'bugs', 'problem', 'problems', 'customer', 'triage', 'defect', 'defects', 'jira'],
    answer:
      'She drove **120+ issues to closure** in JIRA and Azure DevOps, and solved **8+ critical field issues on-site** in Delhi, Mumbai and Hyderabad — debugging customer vehicles from logs and driving **root cause and fixes** with suppliers. That work fed into the MG Astor’s **No. 1 customer-satisfaction** ranking.',
    follow: ['releases', 'awards', 'suppliers'],
  },
  {
    id: 'lead',
    chip: 'Leadership',
    keys: ['!lead', '!leadership', 'leader', 'manage', 'managed', 'manager', 'team', 'people', 'mentor', 'mentoring'],
    answer:
      'She managed a **team of five** for testing and flashing at MG Motor, coordinated **3 suppliers**, and reported to **General Managers and Directors**. At UNR she led lab sessions for **135 students** as a Graduate Teaching Assistant.',
    follow: ['releases', 'teaching', 'tpm'],
  },
  {
    id: 'thesis',
    chip: 'Her thesis',
    keys: ['!thesis', '!research', 'visual tax', 'token', 'tokens', 'vision language', 'medical', 'video', 'gemini', 'compression', 'cost', 'researcher', 'masters thesis'],
    answer:
      'Her M.S. thesis is about **sending cloud AI only what it needs to see** — the device decides what to send. Results: **75.3% fewer image tokens** on single images, 4 of 177 frames for heart-ultrasound clips, and **92.9% fewer input tokens** on hours-long capsule-endoscopy video.',
    follow: ['ai', 'education', 'projects'],
  },
  {
    id: 'ai',
    chip: 'AI projects',
    keys: ['!ai', 'ml', 'machine learning', 'llm', 'llms', 'genai', 'generative', 'security', 'guardrail', 'jailbreak', 'deep learning', 'pytorch', 'neural'],
    answer:
      'Besides her thesis: an **LLM guardrail system** that stopped **88.7%** of jailbreak attacks, a **CAN-bus intrusion detector** at **95.1%** accuracy, a framework for **evaluating LLM security**, and two **generative-AI cloud apps** on AWS. The **Projects** section has code and papers.',
    follow: ['thesis', 'projects', 'coding'],
  },
  {
    id: 'projects',
    chip: 'Projects',
    keys: ['!project', '!projects', 'built', 'build', 'portfolio', 'github', 'code samples'],
    answer:
      'Seven projects across **AI security, computer vision, automotive security, generative AI on the cloud** and **embedded systems** — open any card in the **Projects** section for details, code and papers. Her code is on [GitHub](https://github.com/jmandalia99).',
    follow: ['ai', 'thesis', 'automotive'],
  },
  {
    id: 'automotive',
    chip: 'Automotive background',
    keys: ['!automotive', 'vehicle', 'vehicles', 'car', 'cars', 'infotainment', 'telematics', 'can bus', 'canbus', 'adas', 'embedded', 'firmware', 'iot', 'connected', 'mg', 'astor', 'ecu'],
    answer:
      'She spent **3+ years in automotive**: validating ADAS, navigation, Bluetooth and telematics at MG Motor, then owning the **infotainment & telematics releases** for the MG Astor, then defining **OTA updates** at Matter Motor Works.',
    follow: ['releases', 'ota', 'field'],
  },
  {
    id: 'teaching',
    chip: 'Teaching',
    keys: ['!teach', '!teaching', '!ta', 'teaching assistant', 'students', 'lab', 'labs', 'engr', 'physics'],
    answer:
      'As a **Graduate Teaching Assistant** at UNR she led hands-on labs for **135 students**: **ENGR 100** design labs for 90 first-years (Fall 2025) and **Physics I** labs for 45 students (Spring 2026).',
    follow: ['education', 'lead', 'thesis'],
  },
  {
    id: 'education',
    chip: 'Education',
    keys: ['!education', 'degree', 'degrees', 'masters', 'master', 'ms', 'university', 'unr', 'reno', '!gpa', 'graduate', 'graduating', 'graduation', 'bachelor', 'college', 'study', 'studying', 'school'],
    answer:
      '**M.S. Computer Science**, University of Nevada, Reno — **GPA 3.9 / 4.0**, thesis track, finishing **December 2026**. Before that, **B.E. Electrical Engineering** from The Maharaja Sayajirao University of Baroda — **CGPA 8.72 / 10**.',
    follow: ['thesis', 'teaching', 'certs'],
  },
  {
    id: 'skills',
    chip: 'Skills & tools',
    keys: ['!skill', '!skills', '!tools', 'azure devops', 'agile', 'stack', 'technologies', 'good at', 'strength', 'strengths', 'expertise'],
    answer:
      'Her core is **program & release management** — roadmaps, risk, requirements, vendors and stakeholders — backed by validation (root cause, FMEA, CANoe) and connected-device know-how (OTA, telematics, BLE, MQTT). Day to day: **JIRA, Azure DevOps, Agile**.',
    follow: ['releases', 'certs', 'coding'],
  },
  {
    id: 'coding',
    chip: 'Is she technical?',
    keys: ['!coding', '!code', 'programming', 'developer', 'python', 'software engineer', '!technical', 'hands on', 'leetcode'],
    answer:
      'Yes — she has a **computer science master’s**, uses **Python** in her research and has built her own tools. Her focus, though, is **program and release leadership** rather than coding roles: making sure firmware, apps and cloud ship together.',
    follow: ['tpm', 'skills', 'ai'],
  },
  {
    id: 'certs',
    chip: 'Certifications',
    keys: ['!certif', '!certificate', '!certifications', 'certification', 'course', 'courses', 'google project management', 'pmp'],
    answer:
      'She’s working on the **Google Project Management Certificate**, and holds certificates in **CAN networks (Vector CANoe & CANalyzer)**, **automotive OTA updates**, **DevOps CI/CD** and the **software development life cycle**.',
    follow: ['skills', 'education', 'awards'],
  },
  {
    id: 'awards',
    chip: 'Awards',
    keys: ['!award', '!awards', 'recognition', 'recognized', 'proud', 'achievement', 'achievements', 'nominee', 'csi'],
    answer:
      '**Women Engineer of the Year nominee** (Digital Engineering Awards 2023), **Highest Potential Employee** and **most new-feature ideas** at MG Motor, and a contributor to the MG Astor’s **No. 1 customer-satisfaction** ranking.',
    follow: ['field', 'releases', 'who'],
  },
  {
    id: 'years',
    chip: 'How much experience?',
    keys: ['!experience', 'years', 'how long', 'senior', 'seniority', 'level'],
    answer:
      '**About 4 years**: MG Motor (2021–2024, trainee to Deputy Manager), Matter Motor Works (2024), and Phase Technologies (since May 2026) — plus research and teaching at UNR since 2025.',
    follow: ['releases', 'now', 'tpm'],
  },
  {
    id: 'location',
    chip: 'Where is she based?',
    keys: ['where', 'where is she', 'where does she live', '!location', '!based', 'live', 'lives', 'city', '!relocate', '!relocation', '!remote', 'move', 'onsite', 'hybrid', 'south dakota', 'rapid city'],
    answer:
      `She’s based in **Rapid City, South Dakota**. For relocation, remote or hybrid questions, it’s best to ask her directly at ${mail}.`,
    follow: ['contact', 'tpm', 'now'],
  },
  {
    id: 'availability',
    chip: 'When can she start?',
    keys: ['!available', '!availability', '!start', 'start date', 'when can', 'notice', 'join', 'joining'],
    answer:
      `She finishes her **M.S. in December 2026**. For start dates, email her at ${mail}.`,
    follow: ['contact', 'tpm', 'education'],
  },
  {
    id: 'private',
    keys: ['!visa', '!sponsorship', '!sponsor', 'authorization', 'h1b', 'opt', 'citizen', 'green card', 'work permit', '!salary', 'pay', 'compensation', 'ctc', 'expected salary', 'age', 'married'],
    answer:
      `That’s best discussed with Jinal directly — you can reach her at ${mail}.`,
    follow: ['contact', 'tpm', 'who'],
  },
  {
    id: 'contact',
    chip: 'How do I reach her?',
    keys: ['!contact', '!email', '!reach', 'connect', '!linkedin', 'interview', 'talk', 'call', 'phone', 'message', 'touch', 'meet'],
    answer:
      `Email **${EMAIL}** — ${mail} — or connect on [LinkedIn](${LINKEDIN}). Her resume is [here](/resume.pdf).`,
    follow: ['tpm', 'availability', 'who'],
  },
  {
    id: 'resume',
    chip: 'Resume',
    keys: ['!resume', '!cv', 'résumé'],
    answer: 'Here’s her [resume (PDF)](/resume.pdf). The **Journey** section on this page walks through each role.',
    follow: ['releases', 'contact', 'education'],
  },
  {
    id: 'beyond',
    chip: 'Outside work',
    keys: ['!dance', '!bharatanatyam', 'hobby', 'hobbies', 'hiking', 'hike', 'travel', 'free time', 'fun', 'outside work', 'interests', 'instagram', 'weekend'],
    answer:
      'She trained in **Bharatanatyam** for six years as a child and is **back in class since 2026** — she even built dance tools on [Routes & Roots](https://dance.jinalmandalia.com/). She also loves **hiking** and **visiting new places**.',
    follow: ['who', 'projects', 'contact'],
  },
  {
    id: 'hello',
    keys: ['!hi', '!hello', '!hey', '!namaste', 'good morning', 'good evening', 'hii'],
    answer: 'Hello! Ask me anything about **Jinal’s experience, releases, research** or how to reach her.',
    follow: ['who', 'now', 'tpm'],
  },
  {
    id: 'thanks',
    keys: ['!thanks', '!thank', 'thx', 'ty', 'great', 'awesome', 'helpful', 'bye'],
    answer: `Glad to help! If you’d like to talk to Jinal, she’s at ${mail}.`,
    follow: ['contact', 'who'],
  },
];

/* ─────────────── matching ─────────────── */

const norm = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9.%+#]+/g, ' ').trim();
const stem = (w) => (w.length > 4 ? w.replace(/(ing|ed|s)$/, '') : w);

function close(a, b) {
  // one typo allowed for longer words
  if (a === b) return true;
  if (a.length < 5 || Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, diff = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++diff > 1) return false;
    if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
  }
  return diff + (a.length - i) + (b.length - j) <= 1;
}

export function findTopic(question) {
  const q = ` ${norm(question)} `;
  const words = q.trim().split(' ').filter(Boolean).map(stem);
  let best = null, bestScore = 0;
  topics.forEach((t) => {
    let score = 0;
    t.keys.forEach((raw) => {
      const strong = raw.startsWith('!');
      const key = norm(strong ? raw.slice(1) : raw);
      const w = strong ? 3 : 1;
      if (key.includes(' ')) { if (q.includes(` ${key} `)) score += w + 1; return; }
      const k = stem(key);
      if (words.some((x) => x === k || (k.length >= 4 && x.startsWith(k)) || close(x, k))) score += w;
    });
    if (score > bestScore) { best = t; bestScore = score; }
  });
  return bestScore >= 2 || (bestScore >= 1 && question.trim().split(/\s+/).length <= 2) ? best : null;
}

export const topicById = (id) => topics.find((t) => t.id === id);
