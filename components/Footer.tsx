import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-100 py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="flex justify-center gap-5 sm:gap-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          <Separator />

          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © 2025 Leonhel Fortin. Available for embedded ML consulting and AIoT collaborations.
          </p>
        </div>
      </div>
    </footer>
  )
}
