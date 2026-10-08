export type Project = {
  id: number
  projectType: string
  heading: string
  description: string
  technologies: Technology[]
}

type Technology = {
  label: string
  key: string
}

export const projects: Project[] = [
  {
    id: 1,
    projectType: "Thesis Project",
    heading: "Jobfit: NLP-Based Job Recommendation System",
    description:
      "A platform that analyzes uploaded resumes using NLP and recommends relevant job openings. Includes a Python matching algorithm that scores user qualifications against job requirements.",
    technologies: [
      {
        label: "Next.js",
        key: "next-js",
      },
    ],
  },
]
