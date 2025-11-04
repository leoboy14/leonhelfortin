import { Trophy } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const awards = [
  {
    date: "Apr 3, 2020",
    title: "Innovation Award",
    organization: "Kabasalan Science and Technology High School",
  },
  {
    date: "Apr 3, 2020",
    title: "Research Award (Team)",
    organization: "Kabasalan Science and Technology High School",
  },
  {
    date: "Apr 3, 2020",
    title: "Research Award (Individual)",
    organization: "Kabasalan Science and Technology High School",
  },
  {
    date: "Nov 21, 2019",
    title: "First Place - Physical Science (Team)",
    organization: "Department of Education, Region IX",
    note: "2019 Regional Science and Technology Fair",
  },
  {
    date: "Sep 27, 2019",
    title: "Robotics & Invent School Program",
    organization: "Kabasalan Science and Technology High School",
  },
  {
    date: "Sep 11, 2019",
    title: "SIBOL Award - Contestant (Regional)",
    organization: "DOST IX / TAPI",
    note: "2019 Regional Invention Contest",
  },
  {
    date: "Sep 22, 2018",
    title: "Young Inventors Challenge 2018 - Participant",
    organization: "ASTI, Malaysia",
  },
  {
    date: "Aug 16, 2018",
    title: "SIBOL Award - Finalist (National)",
    organization: "Department of Science and Technology (DOST) / TAPI",
    note: "2018 National Invention Contest",
  },
]

export default function Awards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          <span>Awards & Competitions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="relative border-s border-border">
          {awards.map((award, index) => (
            <li key={index} className={`${index !== awards.length - 1 ? 'mb-5' : ''} ms-3.5`}>
              <div className="absolute w-2 h-2 bg-muted rounded-full mt-1 -start-1 border border-background"></div>
              <time className="mb-0.5 text-xs font-normal leading-none text-muted-foreground block">{award.date}</time>
              <h3 className="text-sm font-semibold text-foreground">{award.title}</h3>
              <p className="text-xs font-normal text-muted-foreground">{award.organization}</p>
              {award.note && (
                <p className="text-xs font-normal text-muted-foreground italic mt-0.5">{award.note}</p>
              )}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
