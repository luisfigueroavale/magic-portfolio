import { About, Home, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Luis",
  lastName: "Vale",
  name: `Luis Vale`,
  role: "Investment Banker | Founder | YC Pioneer Program",
    avatar: "/images/Luis%20Profile%20Pic.png",
  email: "luisvalefigueroa@gmail.com",
  location: "America/New_York",
  languages: ["English", "Spanish"], // Native or bilingual proficiency in English/Spanish
};



const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/luisfigueroavale/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/luisfigueroavale",
  },
  {
    name: "X (Twitter)",
    icon: "x",
    link: "https://x.com/LuisAndLearn",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/luisandlearn",
  },

];

const home: Home = {
  path: "/",
  image: "/images/Luis Profile Pic.png",
  label: "Home",
  title: "Luis Vale",
  description: `Investment Banker | Founder | YC Pioneer Program`,
  headline: <>Luis Vale</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">CostCuts</strong>
      </>
    ),
    href: "/work/costcuts",
  },
  subline: (
    <>
      Investment Banker • Founder • YC Employee • ODF Fellow • YC Pioneer Program
      <br />
      Building anything I find interesting and sharing my learnings.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from New York`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/luisvale",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Bank of America",
        timeframe: "Jul 2025 - Present",
        role: "Investment Banker",
        achievements: [
          <>
            Working in both the NET and M&A groups, providing strategic financial advisory 
            services to corporate clients.
          </>,
          <>
            Leveraging expertise in investment banking to support complex financial transactions 
            and corporate restructuring.
          </>,
        ],
        images: [],
      },
      {
        company: "On Deck",
        timeframe: "Feb 2025 - Mar 2025",
        role: "On Deck Fellow (ODF 24)",
        achievements: [
          <>
            Selected as part of the prestigious On Deck Fellowship program, connecting with 
            top entrepreneurs and investors in the startup ecosystem.
          </>,
          <>
            Participated in intensive workshops, mentorship sessions, and networking events 
            focused on scaling businesses and building meaningful connections.
          </>,
        ],
        images: [],
      },
      {
        company: "CostCuts",
        timeframe: "Jan 2025 - Aug 2025",
        role: "Co-Founder & CEO",
        achievements: [
          <>
            Built a no-fee solution that helps smaller startups and SMBs save 10-30% on 
            their software spend through collective buying power.
          </>,
          <>
            Achieved #4 Product of the Day on Product Hunt with zero promotion, demonstrating 
            strong product-market fit and user demand.
          </>,
        ],
        images: [],
      },

      {
        company: "Bank of America",
        timeframe: "Jun 2024 - Aug 2024",
        role: "M&A Investment Banking Analyst",
        achievements: [
          <>
            Developed PowerPoint presentations, public information books, and financial models 
            regarding potential M&As.
          </>,
        ],
        images: [],
      },
      {
        company: "Pump.co (YC S22)",
        timeframe: "Dec 2023 - Dec 2024",
        role: "Account Executive & GTM",
        achievements: [
          <>
            Led go-to-market initiatives including billboard advertising, social media campaigns, 
            and podcasts, totaling 20%+ monthly revenue growth.
          </>,
          <>
            Managed new leads and hiring efforts from Series Seed to A as the 2nd business hire, 
            generating over $1M in the first year of operations.
          </>,
        ],
        images: [],
      },
      {
        company: "Bank of America",
        timeframe: "Jun 2023 - Aug 2023",
        role: "Natural Resources & Energy Transition Investment Banking Analyst",
        achievements: [
          <>
            Developed PowerPoint presentations, public information books, and financial models 
            regarding IPOs and potential M&As.
          </>,
        ],
        images: [],
      },
      {
        company: "Due North Family Enterprises",
        timeframe: "Jul 2022 - May 2023",
        role: "Private Equity Analyst",
        achievements: [
          <>
            Conducted industry research on multiple sectors to find target companies for acquisition.
          </>,
          <>
            Presented analysis on industries and companies regarding a potential 50-million-dollar 
            acquisition under an LBO model.
          </>,
        ],
        images: [],
      },
      {
        company: "Popular, Inc.",
        timeframe: "Jun 2022 - Jul 2022",
        role: "Investment Analyst",
        achievements: [
          <>
            Analyzed clients' investment portfolios totaling 5 billion AUM, valuing mutual funds 
            to determine if they were investment-grade.
          </>,
          <>
            Developed and presented reports on reconstructing portfolios to adapt to current 
            fixed-income and public market conditions.
          </>,
        ],
        images: [],
      },
      {
        company: "Pingpro",
        timeframe: "Jun 2021 - Aug 2021",
        role: "Regional Sales Manager",
        achievements: [
          <>
            Handled front-end sales and marketing for 100+ contractors in the Puerto Rican subdivision.
          </>,
          <>
            Created customer acquisition strategies and analyzed demographics to move the company's 
            focus to commercial consumers.
          </>,
        ],
        images: [],
      },
      {
        company: "Wells Fargo & Company",
        timeframe: "Jun 2018 - Jul 2018",
        role: "Finance Intern",
        achievements: [
          <>
            Created balance sheets for its subsidiary, Reliable Financial Services, which was 
            consolidated into Wells Fargo's financial statement.
          </>,
          <>
            Administered information management systems for storing lease agreements, insurance 
            statements, and financial reports.
          </>,
        ],
        images: [],
      },
      {
        company: "Global Equity Management (GEM)",
        timeframe: "Aug 2022 - Present",
        role: "Founder & Workshop Director",
        achievements: [
          <>
            Developed the first long/short investment club available to every university with 6+ 
            chapters and 100+ students currently.
          </>,
          <>
            Oversaw all logistics including training, marketing, selecting topics, and managing 
            legal requirements.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "NYU Stern School of Business",
        description: <>Master of Science (MS) in Accounting, Concentration in Finance & Accounting, Minor in Public Policy & Management</>,
      },
      {
        name: "NYU Stern School of Business",
        description: <>Bachelor of Science (BS) in Business, Concentration in Finance & Accounting, Minor in Public Policy & Management</>,
      },
      {
        name: "Y Combinator",
        description: <>Pioneer Program - Attended closed-door talks at YC HQ to learn about building startups from YC Group Partners & Founders</>,
      },
      {
        name: "Founder University",
        description: <>Sixth Cohort - Selected out of 2000+ applications into a cohort of ~150 startup founders</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Competencies",
    skills: [
      {
        title: "Business Strategy",
        description: (
          <>Expert in developing strategic business plans, market analysis, and growth strategies 
          for companies ranging from startups to billion-dollar corporations.</>
        ),
        images: [],
      },
      {
        title: "Finance & Investment Banking",
        description: (
          <>Deep expertise in M&A, financial modeling, corporate finance, and investment 
          analysis with experience at top-tier financial institutions.</>
        ),
        images: [],
      },
      {
        title: "Entrepreneurship",
        description: (
          <>Proven track record of building profitable products, leading sales teams, 
          and scaling businesses from concept to successful market presence.</>
        ),
        images: [],
      },
      {
        title: "Technical Skills",
        description: (
          <>Proficient in Python, Microsoft Office Suite, Google Sheets, Photoshop, After Effects, 
          S&P Capital IQ, Bloomberg Terminal, and financial modeling.</>
        ),
        images: [],
      },
    ],
  },

};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Finance and entrepreneurship projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};



export { person, social, home, about, work };
