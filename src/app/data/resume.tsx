import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Vaishnavi Patil",
  initials: "VP",
  url: "http://localhost:3000/",
  description: "I Code.",
  work: "Frontend developer",
  summary: `

I'm a frontend developer and designer who loves building beautiful and interactive UIs. Animating things is my favorite part—I enjoy making designs come to life. I've also explored Blender a bit, adding 3D to my creative experiments.

Outside of coding, I love doing calligraphy and mandala art. It's my way of slowing down and creating something meaningful.
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
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "vaishnavip276@gmail.com",
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
      Email: {
        name: "Email",
        url: "mailto:vaishnavip276@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vai_shhh27",
        icon: Icons.x,

        navbar: true,
      },

      Instagram: {
        name: "Vaisnavi",
        url: "https://www.instagram.com/vai._shhh27?igsh=MW95Z2hmOHRlZDR4aA==",
        icon: Icons.instagram,
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
      title: "SOLRPC",
      href: "https://solrpc.vercel.app/",
      active: true,
      dates: "April, 2025",
      description: "RPC Aggregator for Solana",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://solrpc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/solrpc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Frontend",
      image: "/solrpc.png",
      video: "",
    },
    {
      title: "TaskFlow",
      href: "https://kanban-lyart-zeta.vercel.app/",
      active: true,
      dates: "15 January, 2025",
      description: "Effortless task management for every team",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://kanban-lyart-zeta.vercel.app/",
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
      video: "",
    },
    {
      title: "TRENDORIA",
      href: "https://github.com/vaishnavip27/e-commerce",
      dates: "February 2025",
      active: true,
      description: "An e-commerce store for clothing brand",
      technologies: ["React.js", "Vite", "TailwindCss", "Typscript"],
      links: [
        {
          type: "Website",
          href: "https://trendoria.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/Trendoria",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Smart-Contract",
      image: "/trendoria.png",
      video: "",
    },
    {
      title: "Zero Gravity landing Page",
      href: "https://zero-gravity-five.vercel.app/",
      dates: "September 2024",
      active: true,
      description: "Landing page for Zero Gravity using Spline",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Spline",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://zero-gravity-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/ZeroGravity",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Frontend",
      image: "/zero-gravity.png",
      video: "",
    },
    {
      title: "Space",
      href: "https://space-gray-beta.vercel.app/",
      dates: "March 2024",
      active: true,
      description: "A Parallax landing page built using Framer Motion",
      technologies: ["Next.js", "JavaScript", "TailwindCSS", "Zora"],
      links: [
        {
          type: "Website",
          href: "https://space-gray-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavip27/Space",
          icon: <Icons.github className="size-3" />,
        },
      ],
      category: "Frontend",
      video: "",
      image: "/space.png",
    },
    {
      title: "Twitter Clone",
      href: "https://twitter-clone-psi-peach.vercel.app/",
      dates: "May 2024",
      active: true,
      description:
        "A normal twitter clone built using HTML, CSS and JavaScript",
      technologies: ["HTML", "CSS", "JavsScript"],
      links: [
        {
          type: "Website",
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
      image: "/twitter.png",
      video: "",
    },
  ],
} as const;
