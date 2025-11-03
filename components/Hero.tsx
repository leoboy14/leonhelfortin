"use client";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Calendar, Users } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Profile Image */}
          <div className="relative h-40 w-40 flex-shrink-0 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
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
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-black">Leonhel Fortin</h1>
              </div>
              <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <MapPin className="h-4 w-4" />
                Iligan City, Philippines
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Researcher and Artificial Intelligence Engineer</Badge>
                <Badge variant="secondary">Embedded Machine Learning</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">Prompt Engineering</Badge>
                <Badge variant="secondary">AIoT Specialist</Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Button className="bg-black hover:bg-black/90 text-white h-9 text-sm">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button variant="outline" className="h-9 text-sm">
                <Users className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Badge */}
          <div className="flex-shrink-0">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 whitespace-nowrap">
              Magna Cum Laude
            </Badge>
          </div>
        </div>
    </section>
  )
}
