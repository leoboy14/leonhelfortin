
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6" />
          </a>
        </Button>
      </div>
      <Button>Chat with Bryl</Button>
    </header>
  )
}
