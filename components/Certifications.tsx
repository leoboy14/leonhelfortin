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
    name: "Python Programming",
    issuer: "Sololearn (2020)",
  },
  {
    name: "C Programming",
    issuer: "Sololearn (2020)",
  },
  {
    name: "HTML",
    issuer: "Sololearn (2020)",
  },
  {
    name: "Java Programming",
    issuer: "Sololearn (2020)",
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
