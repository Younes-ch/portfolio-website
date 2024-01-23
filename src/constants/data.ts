import {
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  Document,
  Email,
  Gaming,
  Github,
  Linkedin,
  Reading,
  Css,
  Docker,
  CSharp,
  Swimming,
  Microsoft,
  FreeCodeCamp,
  KodeKloud,
  Cisco,
  Python,
  Django,
  Javascript,
  Typescript,
  Html,
  Git,
  Bash,
  React,
  Sql,
  GDSC,
} from "../assets/image";
import Resume from "../assets/images/Resume.pdf"

export const EMAIL = "younes.chouikh20@gmail.com";
export const PHONE = "(+216) 93 546 403";
export const ADDRESS = "Monastir, Tunisia";

const DATA = {
  socialLinks: [
    {
      id: "social_link_1",
      icon: Github,
      tooltip: "Github",
      url: "https://github.com/Younes-ch",
      download: false
    },
    {
      id: "social_link_2",
      icon: Linkedin,
      tooltip: "Linkedin",
      url: "https://www.linkedin.com/in/younes-chouikh/",
      download: false
    },
    {
      id: "social_link_3",
      icon: Email,
      tooltip: "Email",
      url: `mailto:${EMAIL}`,
      download: false
    },
    {
      id: "social_link_4",
      icon: Document,
      tooltip: "Resume",
      url: Resume,
      download: true
    },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Computer Science: Algorithms and Data Structures",
      institution: "El Mourouj 6",
      degree: "High school diploma",
      startDate: "2017",
      endDate: "2021",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Software Engineering",
      institution:
        "Higher Institute of Applied Sciences and Technology of Sousse",
      degree: "Bachelor's degree",
      startDate: "2021",
      endDate: "2024",
    },
  ],
  professionalExperiences: [],
  projects: [
    {
      id: "project_1",
      title: "Image Gallery",
      description:
        "Image Gallery is an image discovery web app that helps you find new and interesting images to download or share. With Image Gallery, you can search for images by term and type and order them by most popular or latest.",
      finishDate: "Jan 2024",
      links: [
        {
          label: "View source",
          url: "https://github.com/Younes-ch/image-gallery",
        },
        {
          label: "View demo",
          url: "https://image-gallery-mu-five.vercel.app/",
        },
      ],
      tags: ["React", "Typescript", "TailwindCSS", "HTML", "CSS", "Git"],
    },
    {
      id: "project_2",
      title: "Todo Mobile Application",
      description:
        "This Android application provides a user-friendly platform for managing tasks while incorporating authentication and local storage mechanisms for enhanced security and data persistence. The app has a French and an English version",
      finishDate: "Nov 2023",
      links: [
        {
          label: "View source",
          url: "https://github.com/Younes-ch/todo-mobile-app",
        },
        {
          label: "View demo",
          url: "https://github.com/Younes-ch/todo-mobile-app/assets/56512077/98c6ced3-1675-4181-b1af-69d349edb712",
        },
      ],
      tags: ["Java", "Android SDK", "Android Studio", "XML", "SQLite", "Git"],
    },
    {
      id: "project_3",
      title: "GDSC Discord Bot",
      description:
        "A private general-purpose Discord bot made to organize the Discord server of a volunteer activities club.",
      finishDate: "Jan 2022",
      links: [
        {
          label: "View source",
          url: "https://github.com/Younes-ch/gdsc-discord-bot",
        },
      ],
      tags: [
        "Python",
        "Discord API",
        "Discord.py",
        "Docker",
        "Bash",
        "JSON",
        "Git",
        "Azure",
      ],
    },
    {
      id: "project_4",
      title: "Schedule Scrapper",
      description:
        " A web application that fetches schedules of my university (ISSATSo) and checks for available classrooms on a given day and session.",
      finishDate: "Nov 2022",
      links: [
        {
          label: "View source",
          url: "https://github.com/Younes-ch/university-schedule-scrapper",
        },
      ],
      tags: ["Python", "Django", "BeautifulSoup", "HTML", "CSS", "Git"],
    },
    {
      id: "project_5",
      title: "Library management system",
      description:
        "This is a RESTful API and a landing page for managing a library of books, built with Django and Django Rest Framework.It allows you to add, update, delete, and read books from a database of books.Each book is modeled with a title, author, genre, publishing year, pages, chapters, and link to read it.",
      finishDate: "Apr 2023",
      links: [
        {
          label: "View source",
          url: "https://github.com/Younes-ch/library-management-system",
        },
      ],
      tags: [
        "Python",
        "Django",
        "Django Rest Framework",
        "JSON",
        "API",
        "Javascript",
        "HTML",
        "CSS",
        "Git",
      ],
    },
    {
      id: "project_6",
      title: "Yoink Yoink",
      description:
        "A Unity game I developed can be played in a browser or downloaded; it supports local multiplayer.",
      finishDate: "Mar 2021",
      links: [
        {
          label: "View demo",
          url: "https://younes-ch.itch.io/yoink-yoink",
        },
      ],
      tags: ["C#", "Unity"],
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: CSharp,
      name: "C#",
    },
    {
      id: "skill_2",
      icon: Python,
      name: "Python",
    },
    {
      id: "skill_3",
      icon: Javascript,
      name: "Javascript",
    },
    {
      id: "skill_4",
      icon: Typescript,
      name: "Typescript",
    },
    {
      id: "skill_9",
      icon: Bash,
      name: "Bash",
    },
    {
      id: "skill_10",
      icon: Sql,
      name: "SQL",
    },
    {
      id: "skill_11",
      icon: Html,
      name: "HTML",
    },
    {
      id: "skill_12",
      icon: Css,
      name: "CSS",
    },
    {
      id: "skill_5",
      icon: Django,
      name: "Django",
    },
    {
      id: "skill_6",
      icon: React,
      name: "React",
    },
    {
      id: "skill_7",
      icon: Git,
      name: "Git",
    },
    {
      id: "skill_8",
      icon: Docker,
      name: "Docker",
    },
  ],
  activitiesAndLeadership: [
    {
      id: "act_1",
      startDate: "Aug 2022",
      endDate: "Jul 2023",
      position: "Technical Lead",
      diamondColors: ["Pink", "Blue", "Yellow", "Green"],
      company: {
        logo: GDSC,
        name: "Google Developer Student Clubs",
        info: "Volunteer activities club in Sousse, Tunisia",
      },
      description:
        "● Planned and executed Git Basics 101 Course (Still in production).\n ● Develop a Discord bot to manage GDSC's discord server.\n ● Hosted workshops on how to develop your own Discord bot.",
      links: [
        {
          label: "GDSC Platform",
          url: "https://gdsc.community.dev/higher-institute-of-applied-science-and-technology/",
        },
        {
          label: "Tawla & Kressi Podcast",
          url: "https://linktr.ee/gdsc.issatso",
        },
        {
          label: "GDSC Discord Server",
          url: "https://discord.gg/24VKKDyDh7",
        },
      ],
    },
  ],
  certificates: [
    {
      id: "cert_award_1",
      icon: FreeCodeCamp,
      provider: "freeCodeCamp",
      course: "Foundational C# with Microsoft",
      link: "https://www.freecodecamp.org/certification/Younes-ch/foundational-c-sharp-with-microsoft",
      issueDate: "Nov 2023",
    },
    {
      id: "cert_award_2",
      icon: Microsoft,
      provider: "Microsoft",
      course: "Azure Fundamentals",
      link: "https://www.credly.com/earner/earned/badge/82fa962d-2a2d-449d-8316-6034358bd004",
      issueDate: "Jun 2023",
    },
    {
      id: "cert_award_3",
      icon: KodeKloud,
      provider: "KodeKloud",
      course: "Docker for the Absolute Beginner - Hands On",
      link: "https://kodekloud.com/certificate-verification/2D0D59540D08-2D0D5F1D1142-2D0D5320FC60/",
      issueDate: "May 2023",
    },
    {
      id: "cert_award_4",
      icon: Cisco,
      provider: "Cisco",
      course: "CCNA: Introduction to Networks",
      link: "https://www.credly.com/earner/earned/badge/bfd4c5db-b35f-42e8-8070-73263f29180f",
      issueDate: "Jun 2022",
    },
    {
      id: "cert_award_5",
      icon: Coursera,
      provider: "Coursera",
      course: "Google IT Automation with Python Professional Certificate",
      link: "https://www.coursera.org/account/accomplishments/specialization/PB4BS9JQL3JL",
      issueDate: "Apr 2022",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_3",
      icon: Swimming,
      name: "Swimming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
  ],
};

export default DATA;
