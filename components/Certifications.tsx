import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    name: "Google Professional Project Management",
    issuer: "Google (2023)",
  },
  {
    name: "Google Professional IT Automation",
    issuer: "Google (2021)",
  },
  {
    name: "Elements of AI - 2 ECTS Credits",
    issuer: "University of Helsinki (Oct 2020)",
  },
  {
    name: "Python 3 Tutorial",
    issuer: "SoloLearn (May 2020)",
  },
  {
    name: "HTML Fundamentals",
    issuer: "SoloLearn (Jun 2020)",
  },
  {
    name: "Intro to CSS",
    issuer: "SoloLearn (Apr 2020)",
  },
  {
    name: "Java Tutorial",
    issuer: "SoloLearn (Feb 2017)",
  },
  {
    name: "Certified Ethical Hacking",
    issuer: "CEH (2019)",
  },
  {
    name: "Penetration Testing and Ethical Hacking",
    issuer: "Cybrary - 20 CEU/CPE (13.5 hrs)",
  },
  {
    name: "Data Security",
    issuer: "DICT (May 2020)",
  },
  {
    name: "Cybersecurity Webinar",
    issuer: "DICT (2020)",
  },
  {
    name: "Digipar Webinar",
    issuer: "DICT (Oct 2020)",
  },
  {
    name: "The Hour of Code",
    issuer: "Code.org & Microsoft",
  },
  {
    name: "Shopee Certification of Participation",
    issuer: "Shopee (Aug 2020)",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-8 sm:py-12 bg-slate-100">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="text-center hover:border-primary transition-colors bg-white"
            >
              <CardContent className="pt-4 sm:pt-6 pb-4 px-3 sm:px-6">
                <p className="font-semibold mb-1 text-xs sm:text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
