"use client";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Calendar, Users } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-4 sm:pt-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          {/* Profile Image */}
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 flex-shrink-0 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
            <img
              src="/profile.jpeg"
              alt="Leonhel Fortin"
              className="h-full w-full object-cover object-[50%_30%]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground font-medium text-lg hidden">
              LF
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-3 sm:space-y-4 w-full">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-black">Leonhel Fortin</h1>
              </div>
              <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Iligan City, Philippines
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <Badge variant="secondary" className="text-xs">Researcher</Badge>
                <Badge variant="secondary" className="text-xs">Artificial Intelligence Engineer</Badge>
                <Badge variant="secondary" className="text-xs">Embedded Machine Learning</Badge>
                <Badge variant="secondary" className="text-xs">Computer Vision</Badge>
                <Badge variant="secondary" className="text-xs">Prompt Engineering</Badge>
                <Badge variant="secondary" className="text-xs">AIoT Specialist</Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
              <Button className="bg-black hover:bg-black/90 text-white h-9 text-sm w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button variant="outline" className="h-9 text-sm w-full sm:w-auto">
                <Users className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>

        </div>
    </section>
  )
}
