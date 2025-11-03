import { Badge } from "@/components/ui/badge"
import { FolderGit2, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "EyeWay - Pothole Detection System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["Python", "TensorFlow", "Raspberry Pi"],
  },
  {
    title: "SIRENA AI Products",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["C/C++", "Edge Impulse", "TensorFlow"],
  },
  {
    title: "Smart Cities Data Platform",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["Python", "OpenCV", "Cloud"],
  },
  {
    title: "AIoT Consulting Solutions",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["Python", "TensorFlow", "Linux"],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FolderGit2 className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-base font-bold">Recent Projects</h2>
          </div>
          <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
            <span className="hidden sm:inline">View All</span>
            <span className="sm:hidden">All</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all duration-200 hover:border-primary/50"
            >
              <h3 className="font-semibold text-sm mb-1.5">{project.title}</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs px-2.5 py-0.5">
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
