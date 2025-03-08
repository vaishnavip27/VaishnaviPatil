"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/ProjectCard";
import { JourneyCard } from "@/components/journeycard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/app/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_PROJECTS = 4;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const journeySteps = [
    {
      id: 1,
      title: "Senior Developer",
      description:
        "Led development of a full-stack web application using React and Node.js. Improved application performance by 40% through code optimization and implementing caching strategies.",
      dates: "february 2024",
      imageUrl: "/collgehacka.jpeg",
    },
    {
      id: 2,
      title: "Frontend Developer",
      description:
        "Developed responsive web interfaces and contributed to the company's design system. Collaborated with UX team to implement user-friendly features.",
      dates: "March 2024",
      imageUrl: "/arweave.jpeg",
    },
    {
      id: 3,
      title: "Education",
      description:
        "Bachelor's in Computer Science with focus on web technologies and software engineering. Graduated with honors.",
      dates: "December 2023",
      imageUrl: "/ttt.jpeg",
    },
    {
      id: 4,
      title: "Workshop",
      description:
        "Participated in ETH Mumbai hackathon, building decentralized applications on Ethereum.",
      dates: "March 2024",
      imageUrl: "/tweet.jpeg",
    },
    {
      id: 5,
      title: "Project",
      description:
        "Built decentralized applications using Arweave for permanent storage solutions.",
      dates: "December 2024",
      imageUrl: "/eth-mumbai.jpg",
    },
    {
      id: 6,
      title: "Team Leadership",
      description:
        "Led a team of developers in creating innovative solutions for real-world problems.",
      dates: "Since 2022",
      imageUrl: "/stackheads.jpg",
    },
  ];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="mb-5">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 rounded-xl">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <div className="flex-col flex flex-1 justify-center items-center space-y-1">
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none flex items-center gap-3"
            >
              <div className="font-semibold">{DATA.name.split(" ")[0]}</div>
              <span className="font-semibold">{DATA.name.split(" ")[1]}</span>
            </BlurFade>
            <span className="text-2xl">Frontend Developer</span>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex pb-8 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="custom-get-started-button justify-center flex items-center rounded-xl bg-foreground bg-white text-black text-background font-semibold px-8 py-2 text-sm">
              About
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="custom-get-started-button w-44 justify-center flex items-center px-8 py-2 bg-white font-semibold text-black rounded-xl text-sm mb-3">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recent Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from{" "}
                  <b className="mr-1 text-white">frontend</b>
                  to <b className="text-white">backend</b> and even{" "}
                  <b className="text-white">smart contracts</b>. Here are a few
                  of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects
              .slice(0, showAll ? DATA.projects.length : VISIBLE_PROJECTS)
              .map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={handleToggle} className="px-4 py-2 text-white">
              {showAll ? (
                <div className="custom-get-started-button text-sm bg-white text-black font-semibold flex items-center gap-2 rounded-xl px-8 py-2 hover:scale-95 transition-all">
                  Show Less
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className=" custom-get-started-button text-sm bg-white text-black font-semibold flex items-center gap-2 px-7 py-2 rounded-xl hover:scale-95 transition-all">
                  Show More
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>
      </section>
      <section id="journey" className="w-full py-12 bg-[#121212] text-white">
        <div className="space-y-12 max-w-[800px] mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="space-y-1 flex flex-col items-center">
                <div className=" custom-get-started-button w-40 px-8 py-2 bg-white text-black rounded-xl font-semibold text-sm">
                  My Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">
                  My Journey
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {journeySteps.map((step) => (
              <BlurFade
                key={step.id}
                delay={BLUR_FADE_DELAY * 12 + step.id * 0.05}
              >
                <JourneyCard
                  title={step.title}
                  description={step.description}
                  dates={step.dates}
                  imageUrl={step.imageUrl}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="flex items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3 flex flex-col items-center justify-center">
              <div className="custom-get-started-button bg-foreground text-background w-28 px-8 py-2 bg-white font-semibold text-black rounded-xl text-sm">
                Contact
              </div>
              <h2 className="text-2xl font-bold sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                I am always open to freelance work. If you are interested, feel
                free to{" "}
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  className="text-white hover:underline"
                >
                  email
                </Link>{" "}
                /
                <Link href="" className="text-white hover:underline">
                  dm
                </Link>{" "}
                me.
              </p>
              <a
                href="https://calendly.com/vaishnavip276/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="custom-get-started-button mt-12 text-sm h-12 w-44 bg-white text-black rounded-xl hover:bg-gray-500 ">
                  Book a Call
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
