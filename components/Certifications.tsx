const certificationCategories = [
  {
    category: "Professional Certifications",
    certs: [
      {
        name: "Google Professional Project Management",
        issuer: "Google (2023)",
      },
      {
        name: "Google Professional IT Automation",
        issuer: "Google (2021)",
      },
    ],
  },
  {
    category: "AI & Computing",
    certs: [
      {
        name: "Elements of AI - 2 ECTS Credits",
        issuer: "University of Helsinki (Oct 2020)",
      },
    ],
  },
  {
    category: "Programming Languages",
    certs: [
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
    ],
  },
  {
    category: "Cybersecurity",
    certs: [
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
    ],
  },
  {
    category: "Computer Science & Professional Development",
    certs: [
      {
        name: "The Hour of Code",
        issuer: "Code.org & Microsoft",
      },
      {
        name: "Shopee Code League 2020 (Student Category)",
        issuer: "Shopee (Jun 8 - Aug 8, 2020)",
      },
    ],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">
          Certifications
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {certificationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-sm sm:text-base font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.certs.map((cert, certIndex) => (
                  <div
                    key={certIndex}
                    className="border-l-2 border-primary/30 pl-4 py-2 hover:border-primary transition-colors"
                  >
                    <p className="font-semibold text-sm sm:text-base text-foreground">{cert.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
