import { Button } from "@/components/ui/button"
import { Project } from "@/constants/projects"
import { ArrowUpRight } from "lucide-react"
import SkillBadge from "../badge"

export default function ProjectCard({
  projectType,
  heading,
  description,
  technologies,
}: Project) {
  return (
    <div className="group border-y py-8 transition-all duration-200 ease-in-out hover:px-5">
      <div className="flex justify-between">
        <div>
          <p className="mb-2 text-xs tracking-[0.14em] text-muted uppercase">
            {projectType}
          </p>
          <h3 className="text-[21px] font-medium group-hover:text-accent">
            {heading}
          </h3>
        </div>
        <Button
          size={"icon-lg"}
          variant={"outline"}
          className="rounded-full hover:bg-white"
        >
          <ArrowUpRight className="size-6 group-hover:text-accent" />
        </Button>
      </div>

      <p className="mt-5 mb-6 text-[16px] text-muted">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <SkillBadge key={tech.key}>{tech.label}</SkillBadge>
        ))}
      </div>
    </div>
  )
}
