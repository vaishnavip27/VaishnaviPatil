import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vaishnavi Patil",
  initials: "VP",
  url: "https://www.0xsarthak.xyz/",
  description: "I Code.",
  summary: `Hey, I'm Vaishnavi

I'm a frontend developer who loves building beautiful and interactive UIs. Animating things is my favorite part—I enjoy making designs come to life. I’ve also explored Blender a bit, adding 3D to my creative experiments.

Outside of coding, I love doing calligraphy and mandala art. It’s my way of slowing down and creating something meaningful.
`,
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Rust",
    "Solidity",
    "Databases",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "notsarthakshah@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vaishnavip27",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vaishnavi-patil27/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vai_shhh27",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "TaskFlow",
      href: "https://kanban-alpha-five.vercel.app/",
      active: true,
      Date: "15 January, 2025",
      description: "Effortless task management for every team",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://kanban-alpha-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/kanban",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Frontend",
      image: "/dashboard-1.png",
      //   video: "/projects/solui.mp4",
    },
    {
      title: "ARIA",
      href: "https://github.com/vaishnavip27/ARIA",
      dates: "November 2024",
      active: true,
      description:
        "In this project you can execute various Web3-related actions intuitively and efficiently built on AO and Arweave.",
      technologies: ["Foundry", "Solidity", "Chainlink", "Open Zeppelin"],
      links: [
        {
          type: "Website",
          href: "https://aria-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/ARIA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Smart-Contract",
      image: "",
      video: "/aria.mp4",
    },
    {
      title: "Weave Word",
      href: "https://github.com/vaishnavip27/WeaveWord",
      dates: "August 2024",
      active: true,
      description:
        "Wordle on AO is a decentralized word-guessing game built on Arweave’s AO, ensuring transparent and tamper-proof gameplay. Guess the secret word in limited attempts, with every move recorded on-chain!",
      technologies: ["Next.js", "Lua"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/merkle-airdrop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Smart-Contract",
      image: "/wordle.png",
      video: "",
    },
    {
      title: "Task Management",
      href: "https://task-management-silk-delta.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Convert effortlessly between AO and Armstrong units. No need to count zeroes.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Arweave", "AO"],
      links: [
        {
          type: "Website",
          href: "https://task-management-silk-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/task-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Frontend",
      image: "",
      video: "/projects/ao-calculator.mp4",
    },
    {
      title: "Nexus",
      href: "https://mumbaieth.vercel.app/",
      dates: "March 2024",
      active: true,
      description:
        "A website for EthMumbai with an SVG logo that changes colors based on user preferences and allows users to mint it as a NFT.",
      technologies: ["Next.js", "JavaScript", "TailwindCSS", "Zora"],
      links: [
        {
          type: "Website",
          href: "https://mumbaieth.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/eth-mumbai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Frontend",
      image: "/projects/ethmumbai.png",
      video: "",
    },
    {
      title: "Twitter Clone",
      href: "https://twitter-clone-psi-peach.vercel.app/",
      dates: "May 2024",
      active: true,
      description:
        "Frictionless, Decentralized Recurring Payments for Builders on Base built at Onchain Summer [FBI]",
      technologies: [
        "Next.js",
        "TypeScript",
        "Hardhat",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Demo",
          href: "https://twitter-clone-psi-peach.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/twitter-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Hackathon",
      image: "/projects/basewave.svg",
      video: "",
    },
  ],
} as const;
