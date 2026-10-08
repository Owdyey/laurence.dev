type CareerTimelineContent = { id: number; description: string }

type CareerTimeline = {
  id: number
  jobTitle: string
  jobSubtitle: string
  duration: {
    from: string
    to: string
  }
  company: string
  jobLocation: string
  content: CareerTimelineContent[]
}

export const careerTimeline: CareerTimeline[] = [
  {
    id: 1,
    jobTitle: "Tech Associate",
    jobSubtitle: "Full-Stack Developer",
    duration: {
      from: "September 2024",
      to: "Present",
    },
    company: "Mayan Solutions Inc.",
    jobLocation: "Makati City, Metro Manila",
    content: [
      {
        id: 1,
        description:
          "Integrated external banking and rewards platforms into internal systems through secure API endpoints, supporting transaction processing and centralized data management.",
      },
      {
        id: 2,
        description:
          "Built a backend service that ingests attendance logs synced from a biometric application across 1,000+ stores, handling high-volume concurrent synchronization workloads.",
      },
      {
        id: 3,
        description:
          "Designed and documented RESTful APIs in NestJS and FastAPI for internal applications and third-party integrations, standardizing API contracts through Swagger/OpenAPI.",
      },
      {
        id: 4,
        description:
          "Automated recurring workflows, including scheduled data delivery via SFTP and email-based reporting.",
      },
      {
        id: 5,
        description:
          "Developed an analytics dashboard and scoring/data-processing logic to turn raw data into insights for decision-making.",
      },
      {
        id: 6,
        description:
          "Built and optimized e-commerce features and CMS-driven websites (Next.js, Sanity, WordPress), improving navigation, user flow, and site performance.",
      },
      {
        id: 7,
        description:
          "Deployed and maintained applications on UpCloud, DigitalOcean, Vercel, and Netlify; configured Linux servers, DNS, and SSL certificates.",
      },
      {
        id: 8,
        description:
          "Worked in Agile/Scrum teams across the full development lifecycle, from requirements gathering to deployment, using Git/GitHub and Jira.",
      },
    ],
  },
]
