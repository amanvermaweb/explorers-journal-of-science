export const journalEmail = "ejs.sciencejournalteam@gmail.com";
export const companyLinkedInUrl =
  "https://www.linkedin.com/company/the-explorers-journal-of-science/";
export const siteMetadata = {
  title: "The Explorer's Journal of Science",
  description: "A student-led STEM journal.",
};

export const navigationItems = [
  { href: "#hero", label: "Hero" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#team", label: "Team" },
  { href: "#editorial-board", label: "Editorial Board" },
  { href: "#advisors", label: "Advisors" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export const heroContent = {
  title: "The Explorer's Journal of Science",
  description:
    "A global student-led scientific journal dedicated to empowering the next generation of researchers. The Explorer's Journal of Science provides a platform for students worldwide to publish research, share ideas, and contribute to the advancement of scientific knowledge. Our mission is to make scientific publishing accessible to young researchers and foster a collaborative global STEM community.",
  newsletter: {
    title: "Subscribe to Our Newsletter",
    description:
      "Get journal updates, new publication announcements, and opportunities from the Explorer's Journal of Science.",
    submitLabel: "Subscribe",
  },
};

export const aboutContent = {
  id: "about",
  title: "About Us",
  intro:
    "A student-led scientific journal designed to help young researchers publish with clarity, credibility, and global visibility.",
  overviewCards: [
    {
      title: "Our Mission",
      description:
        "The mission of The Explorer's Journal of Science is to create an accessible platform where students can share their research, ideas, and discoveries with a global audience. We strive to promote scientific curiosity, critical thinking, and academic integrity.",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to become a globally recognized student-led scientific journal that nurtures young researchers and encourages interdisciplinary collaboration.",
    },
  ],
  detailSections: [
    {
      title: "What We Do",
      items: [
        {
          title: "Publishing",
          description:
            "Publish student research papers for a wider academic audience.",
        },
        {
          title: "Communication",
          description:
            "Create opportunities for clear and confident scientific communication.",
        },
        {
          title: "Mentorship",
          description:
            "Support young researchers through mentorship and editorial guidance.",
        },
        {
          title: "Collaboration",
          description:
            "Promote global collaboration in STEM across disciplines and communities.",
        },
      ],
    },
    {
      title: "Our Values",
      items: [
        {
          title: "Integrity",
          description:
            "We uphold the highest standards of academic honesty and ethical publishing.",
        },
        {
          title: "Accessibility",
          description:
            "We believe that every student should have the opportunity to publish their work.",
        },
        {
          title: "Collaboration",
          description:
            "Science grows through collaboration across cultures and disciplines.",
        },
        {
          title: "Innovation",
          description:
            "We encourage original ideas and creative approaches to solving scientific problems.",
        },
      ],
    },
  ],
};

export const researchContent = {
  id: "research",
  title: "Research Section",
  intro:
    "We welcome submissions from students and early-stage researchers in various fields of science.",
  cards: [
    {
      title: "Submissions May Include",
      accent: "primary",
      items: [
        "Student research papers and review articles",
        "Science explainers and conceptual essays",
        "Experimental reports and data-driven projects",
        "Interviews, opinion pieces, and features on scientific innovation",
        "Learning experiences and reflections in STEM",
      ],
    },
    {
      title: "Formatting Requirements",
      accent: "secondary",
      items: [
        "Manuscripts must be written in English.",
        "Research papers should include a title, abstract, introduction, methodology, results, discussion, and references.",
      ],
    },
    {
      title: "Ethical Guidelines",
      accent: "secondary",
      items: [
        "All submissions must adhere to academic integrity and ethical research practices.",
        "Plagiarism, falsification of data, and unethical research practices will result in rejection.",
      ],
    },
    {
      title: "Submission Process",
      accent: "primary",
      ordered: true,
      items: [
        "Prepare your manuscript following the formatting guidelines.",
        "Submit your manuscript through the submission form.",
        "The editorial team will review your submission.",
        "Authors will receive feedback and publication decisions.",
      ],
    },
  ],
  submissionForm: {
    title: "Submission Form",
    description:
      "Use the form below to submit your manuscript for editorial review.",
    href: "https://forms.gle/jN5hwF7EQjNkr4mM7",
  },
};

export const teamContent = {
  id: "team",
  title: "Team",
  intro:
    "Meet the core student team behind the journal's strategy, editorial direction, operations, outreach, and technology.",
  people: [
    {
      name: "Krishna Bansal",
      role: "Chief Executive Officer",
      linkedinUrl: "https://www.linkedin.com/in/krishna-bansal-627329378/",
    },
    {
      name: "Akanksha",
      role: "Editor in Chief",
      linkedinUrl: "https://www.linkedin.com/in/akanksha-choudhury-30954b337/",
      photo: "/akanksha-choudhury.jpeg",
    },
    {
      name: "Pratham Vohra",
      role: "Chief Operating Officer",
      linkedinUrl: "https://www.linkedin.com/in/prathamvohra/",
      photo: "/pratham-vohra.png",
    },
    {
      name: "Aman Verma",
      role: "Chief Technology Officer",
      linkedinUrl: "https://www.linkedin.com/in/aman-verma-dev/",
      photo: "/aman-verma.jpeg",
    },
    {
      name: "Prisha Agarwal",
      role: "Chief Marketing Officer",
      linkedinUrl: "https://www.linkedin.com/in/prisha-agarwal-8953732a7/",
      photo: "/prisha-agarwal.jpeg",
    },
    {
      name: "Priyadharsni Murali",
      role: "Partnership and Outreach Head",
      linkedinUrl:
        "https://www.linkedin.com/in/priyadharsni-murali-0b1443371/",
    },
  ],
};

export const editorialBoardContent = {
  id: "editorial-board",
  title: "Editorial Board",
  intro:
    "Our editorial board oversees review quality, publication standards, and communication with contributors.",
  people: [
    {
      name: "Uthpala Kavindi",
      role: "Senior Editor",
      linkedinUrl: "https://www.linkedin.com/in/kavindi-rupasinghe-403b18195/",
      photo: "/kavindi-rupasinghe.png",
    },
    {
      name: "Jasmita Touti",
      role: "Senior Editor",
      linkedinUrl: "https://www.linkedin.com/in/jasmita-touti-7230a315b/",
      photo: "/jasmita-touti.jpeg",
    },
  ],
};

export const advisorsContent = {
  id: "advisors",
  title: "Advisors",
  intro:
    "Our advisors bring expertise from education, scientific research, and industry to guide the journal's academic direction and long-term development.",
  showProfileLinks: false,
  people: [
    {
      name: "Dana Paquin",
      role:
        "Senior Mathematics Instructor and Director of Mathematics Curriculum at Stanford University",
      photo: "/dana-paquin.jpeg",
    },
    {
      name: "Archana Sharma",
      role: "Principal Physicist at CERN",
    },
    {
      name: "Premjit Balasundaram",
      role: "Project Executive at IBM",
      photo: "/premjit-balasundaram.jpeg",
    },
  ],
};

export const partnersContent = {
  id: "partners",
  title: "Partners",
  intro:
    "We collaborate with student-led communities and organizations expanding access to STEM learning, research, and publishing.",
  items: [
    {
      name: "STEMise Community",
      logo: "/partner1.png",
      description:
        "Founded in Summer of 2025, STEMise is a youth-led organization dedicated to making a difference in the lives of youths by providing STEM education through fun, interactive STEM kits and lessons on technology.",
      linkedinUrl: "https://www.linkedin.com/company/stemise/",
    },
    {
      name: "Minorities in STEM",
      logo: "/partner2.png",
      description:
        "The #1 community empowering students from minority backgrounds to delve into the world of STEM.",
      linkedinUrl: "https://www.linkedin.com/company/minoritiesinstem/",
    },
    {
      name: "Team Neuron",
      logo: "/partner3.png",
      description:
        "TeamNeuron is an open, community-driven online platform built to break academic and institutional barriers around research access.",
      linkedinUrl: "https://www.linkedin.com/company/teamneuron/",
    },
  ],
  partnershipEmail: journalEmail,
};

export const contactContent = {
  id: "contact",
  title: "Contact Us",
  heading: "Get in touch with the journal team.",
  description:
    "Use the form for submissions, editorial questions, and general enquiries.",
  email: journalEmail,
  phone: "Add phone number",
  methods: [
    {
      label: "Phone",
      value: "Add phone number",
    },
    {
      label: "Email",
      value: journalEmail,
      href: `mailto:${journalEmail}`,
    },
    {
      label: "LinkedIn",
      value: "The Explorer's Journal of Science",
      href: companyLinkedInUrl,
    },
  ],
  form: {
    defaultSubject: "Explorer's Journal of Science inquiry",
    submitLabel: "Send Message",
    fields: [
      {
        id: "contact-name",
        name: "name",
        label: "Full Name",
        type: "text",
        autoComplete: "name",
        placeholder: "Full Name",
      },
      {
        id: "contact-email",
        name: "email",
        label: "Email Address",
        type: "email",
        autoComplete: "email",
        placeholder: "you@example.com",
      },
      {
        id: "contact-subject",
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "How can we help?",
      },
      {
        id: "contact-message",
        name: "message",
        label: "Message",
        type: "textarea",
        rows: 6,
        placeholder: "Tell the journal team what you need.",
      },
    ],
  },
};

export const footerContent = {
  tagline:
    "A student-led scientific journal designed to help young researchers publish with clarity, credibility, and global visibility.",
  linkedinUrl: companyLinkedInUrl,
};