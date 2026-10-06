import SkillBadge from "@/components/custom/badge"
import { skills } from "@/components/custom/badge/constants"
import BannerContainer from "@/components/custom/banner-container"
import Topbar from "@/components/custom/top-bar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dot } from "lucide-react"

export default function Page() {
  return (
    <div>
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
            <span className="text-[13px]">Professional experience</span>
          </div>
          <div className="grid gap-3 border-x py-8 ps-8 pe-6">
            <strong className="text-4xl font-light">1,000</strong>
            <span className="text-[13px]">
              Stores supported by biometric data system
            </span>
          </div>
          <div className="grid gap-3 py-8 ps-8 pe-6">
            <strong className="text-4xl font-light">4</strong>
            <span className="text-[13px]">Cloud platforms deployed to</span>
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
    </div>
  )
}
