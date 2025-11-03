import { Badge } from "@/components/ui/badge"
import { Code2, ChevronRight } from "lucide-react"

const techStack = [
  {
    category: "Professional Roles",
    technologies: [
      "Researcher",
    ],
  },
  {
    category: "Specializations",
    technologies: [
      "Artificial Intelligence Engineer",
      "Embedded Machine Learning",
      "Computer Vision",
      "Prompt Engineering",
      "AIoT Specialist",
    ],
  },
  {
    category: "Programming Languages",
    technologies: [
      "C/C++",
      "Python",
      "Java",
      "HTML",
    ],
  },
  {
    category: "ML & AI Frameworks",
    technologies: [
      "TensorFlow",
      "OpenCV",
      "Edge Impulse",
    ],
  },
  {
    category: "Hardware & Systems",
    technologies: [
      "Raspberry Pi",
      "Linux",
      "Cloud",
      "IoT",
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
            View All
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-5">
          {techStack.map((stack, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-2.5">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs font-normal px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
