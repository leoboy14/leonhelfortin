import { Briefcase } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    year: "2024 - Present",
    title: "Masters of Science in Computer Applications",
    company: "MSU-Iligan Institute of Technology",
  },
  {
    year: "2024",
    title: "BS Computer Applications (Internet of Things) - Magna Cum Laude",
    company: "MSU-Iligan Institute of Technology",
  },
  {
    year: "2023",
    title: "Founder & President",
    company: "Youth Network Iligan",
  },
  {
    year: "2023",
    title: "Vice-President for External Affairs",
    company: "DEVCON Iligan Chapter",
  },
  {
    year: "2023",
    title: "Smart Cities Lead",
    company: "Center for Digital Iligan Innovation and Sustainability",
  },
  {
    year: "2022",
    title: "Digitalization Volunteer",
    company: "City Government of Iligan",
  },
  {
    year: "2022",
    title: "Huawei Seeds for the Future",
    company: "Philippine Representative",
  },
  {
    year: "2020",
    title: "Chief Executive Officer",
    company: "SIRENA AI",
  },
  {
    year: "2020",
    title: "Embedded Machine Learning Consultant",
    company: "Fiverr (Freelancing)",
  },
  {
    year: "2020",
    title: "Started BS Computer Science",
    company: "University of the People",
  },
  {
    year: "2017",
    title: "Hour of Code",
    company: "Code.org",
  },
  {
    year: "2014",
    title: "First Exposure to Technology, Networks and VPN",
    company: "",
  },
]

export default function Experience() {
  return (
    <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            <span>Experience</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="relative border-s border-border">
            {experiences.map((exp, index) => (
              <li key={index} className={`${index !== experiences.length - 1 ? 'mb-5' : ''} ms-3.5`}>
                <div className="absolute w-2 h-2 bg-muted rounded-full mt-1 -start-1 border border-background"></div>
                <time className="mb-0.5 text-xs font-normal leading-none text-muted-foreground block">{exp.year}</time>
                <h3 className="text-sm font-semibold text-foreground">{exp.title}</h3>
                <p className="text-xs font-normal text-muted-foreground">{exp.company}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
  )
}
