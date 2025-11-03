"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

const recommendations = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Academic Colleague",
    title: "MSU-IIT Faculty",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Industry Partner",
    title: "IoT Solutions Provider",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Government Partner",
    title: "LGU Iligan Official",
  },
]

export default function Recommendations() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recommendations.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="recommendations" className="py-8 sm:py-12 bg-slate-50">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
          Recommendations
        </h2>
        <div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {recommendations.map((rec, index) => (
                <Card key={index} className="min-w-full bg-white">
                  <CardContent className="pt-5 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-8">
                    <p className="text-sm sm:text-base italic text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      &quot;{rec.text}&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-xs sm:text-sm">{rec.name}</p>
                      <p className="text-xs text-muted-foreground">{rec.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
