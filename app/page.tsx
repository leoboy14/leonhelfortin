import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import TechStack from "@/components/TechStack"
import Publications from "@/components/Publications"
import Projects from "@/components/Projects"

import Certifications from "@/components/Certifications"
import Recommendations from "@/components/Recommendations"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      <div className="a4-container space-y-6">
        <Hero />

        {/* Two-column layout: About+TechStack on left, Experience on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Left column: About and TechStack */}
          <div className="space-y-6">
            <About />
            <TechStack />
          </div>

          {/* Right column: Experience */}
          <div>
            <Experience />
          </div>
        </div>

        <Publications />
        <Projects />
        <Certifications />
        <Recommendations />
        <Footer />
      </div>
    </main>
  )
}
