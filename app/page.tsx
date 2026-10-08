import SkillBadge from "@/components/custom/badge"
import { skills } from "@/components/custom/badge/constants"
import BannerContainer from "@/components/custom/banner-container"
import ProjectCard from "@/components/custom/card/project-card"
import Footer from "@/components/custom/footer"
import Topbar from "@/components/custom/top-bar"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { careerTimeline } from "@/constants/career-timeline"
import { education } from "@/constants/education"
import { projects } from "@/constants/projects"
import {
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  Copyright,
  Dot,
} from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Page() {
  return (
    <div className="bg-[#FBFBF9]">
      <Topbar />
      {/* Hero  Banner*/}
      <BannerContainer id="#" className="pt-46 pb-26">
        <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">
          full-stack developer
        </p>
        <h1 className="mb-8 text-[64px] font-light capitalize">
          john laurence p. burgos
        </h1>

        <p className="mb-10 text-xl leading-[1.75] text-muted">
          Full-stack developer with 2 years of experience building and deploying
          production web applications, API-driven systems, and backend
          integrations using Next.js, NestJS, FastAPI, and PostgreSQL.
        </p>
        <div>
          <Button className="text-sm font-normal" size={"lg"}>
            Get in touch
          </Button>
          <Button variant="ghost" className="text-sm font-normal capitalize">
            View Projects <ArrowRight />
          </Button>
        </div>
        <p className="mt-19 flex items-center">
          <Dot color="#4f46e5" />
          <span className="text-[13px] text-muted">
            Metro Manila, Philippines
          </span>
        </p>
      </BannerContainer>
      <BannerContainer id="about">
        <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">
          About
        </p>
        <h2 className="mb-14 text-5xl leading-[1.12] font-light">
          Building reliable system from interface to infrastracture.
        </h2>
        <p className="mb-16 text-xl">
          Experienced in asynchronous processing with AWS SQS, third-party API
          integrations, biometric data systems supporting 1,000+ stores, and
          deploying applications across cloud and Linux environments.
        </p>

        <div className="grid grid-cols-3 border-y">
          <div className="grid gap-3 py-8 ps-8 pe-6">
            <strong className="text-4xl font-light">2 yrs+</strong>
            <span className="text-[13px] text-muted">
              Professional experience
            </span>
          </div>
          <div className="grid gap-3 border-x py-8 ps-8 pe-6">
            <strong className="text-4xl font-light">1,000+</strong>
            <span className="text-[13px] text-muted">
              Stores supported by biometric data system
            </span>
          </div>
          <div className="grid gap-3 py-8 ps-8 pe-6">
            <strong className="text-4xl font-light">4</strong>
            <span className="text-[13px] text-muted">
              Cloud platforms deployed to
            </span>
          </div>
        </div>
      </BannerContainer>
      <BannerContainer id="skills">
        <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">
          Skills
        </p>
        <h2 className="text-5xl leading-[1.12] font-light">
          A practical, full-stack toolkit.
        </h2>
        <p className="mt-6 mb-16 text-[16px] text-muted">
          Technologies I use to design, build, ship, and maintain production
          applications.
        </p>

        <div className="grid grid-cols-2 gap-x-16 border-t">
          {skills.map(({ key, value, content }) => (
            <div key={key} className="border-b pt-8 pb-10">
              <h3 className="mb-5 text-[17px]">{value}</h3>
              <div className="flex flex-wrap gap-3">
                {content.map((item) => (
                  <SkillBadge key={item}>{item}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BannerContainer>
      <BannerContainer id="experience">
        <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">
          experience
        </p>
        <h2 className="mb-14 text-5xl leading-[1.12] font-light">
          Production work with real-world scale.
        </h2>

        <div>
          <Timeline defaultValue={2}>
            {careerTimeline.map((career) => (
              <React.Fragment key={career.id}>
                <TimelineItem step={career.id}>
                  <TimelineHeader>
                    <div className="flex justify-between">
                      <div>
                        <TimelineTitle>
                          <span className="text-xl">{career.jobTitle}</span>
                        </TimelineTitle>
                        <TimelineDate className="mt-1">
                          {career.jobSubtitle}
                        </TimelineDate>
                      </div>
                      <TimelineDate>
                        {career.duration.from} — {career.duration.to}
                      </TimelineDate>
                    </div>
                    <div className="mt-6 mb-8 flex items-center gap-1 text-sm">
                      <p className="font-medium">{career.company}</p>
                      <Dot className="size-3 text-muted" />
                      <p className="font-light text-muted">
                        {career.jobLocation}
                      </p>
                    </div>
                  </TimelineHeader>
                  <TimelineIndicator>
                    <CircleDot className="size-4" color="#4f46e5" />
                  </TimelineIndicator>
                  <TimelineSeparator />
                  <TimelineContent className="flex flex-col gap-4 ps-4">
                    {career.content.map(({ description, id }) => (
                      <li
                        key={id}
                        className="text-[16px] leading-[1.7] text-muted marker:text-[#a1a1aa]"
                      >
                        {description}
                      </li>
                    ))}
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem step={career.id + 1} />
              </React.Fragment>
            ))}
          </Timeline>
        </div>
      </BannerContainer>

      <BannerContainer id="projects">
        <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">
          Selected Projects
        </p>
        <h2 className="text-5xl leading-[1.12] font-light">
          Ideas made tangible.
        </h2>
        <p className="mt-6 mb-16 text-[16px] text-muted">
          A selection of academic projects focused on useful systems and applied
          technology.
        </p>

        <div>
          {projects.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </BannerContainer>

      <BannerContainer>
        <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">
          Education
        </p>
        <h2 className="mb-14 text-5xl leading-[1.12] font-light">
          Academic Foundation
        </h2>

        <div className="flex justify-between border-y py-8">
          <div>
            <h3 className="text-[17px] font-medium">{education.school}</h3>
            <p className="mt-2 text-sm text-muted">{education.course}</p>
          </div>
          <p className="text-[13px] text-muted">
            {education.date.from} — {education.date.to}
          </p>
        </div>
      </BannerContainer>
      <Separator className="mt-36" />
      <div className="border-t bg-white px-95 pt-28 pb-26">
        <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">
          Contact
        </p>
        <h2 className="text-[64px] leading-[1.12] font-light">
          Let's work together.
        </h2>
        <p className="mt-6 mb-10 text-[16px] text-muted">
          Open to full-stack opportunities and collaborations.
        </p>

        <a href="mailto:johnlaurenceburgos@gmail.com">
          <Button
            className="p-0 text-2xl font-normal tracking-[-0.02em]"
            variant={"link"}
          >
            johnlaurenceburgos@gmail.com <ArrowUpRight className="size-7" />
          </Button>
        </a>
        <Separator className="mt-20 mb-6" />
        <div className="flex justify-between text-[13px] text-muted">
          <p>Metro Manila, Philippines</p>
          <div>
            <a
              href="https://www.linkedin.com/in/john-laurence-burgos-491421259"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
