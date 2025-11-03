"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

const recommendations = [
  {
    text: "Leonhel's expertise in embedded machine learning and AIoT is exceptional. His work on the EyeWay project demonstrates his ability to combine hardware, software, and AI seamlessly.",
    name: "Academic Colleague",
    title: "MSU-IIT Faculty",
  },
  {
    text: "As CEO of SIRENA AI, Leonhel has shown remarkable leadership in developing embedded ML products and securing key partnerships. His technical skills and business acumen are impressive.",
    name: "Industry Partner",
    title: "IoT Solutions Provider",
  },
  {
    text: "Working with Leonhel on smart cities initiatives has been amazing. His data science methodologies and project management skills have been crucial in securing funding and delivering results.",
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
    <section id="recommendations" className="py-12 bg-slate-50">
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">
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
                  <CardContent className="pt-6 pb-8 px-8">
                    <p className="text-base italic text-muted-foreground mb-6">
                      &quot;{rec.text}&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-sm">{rec.name}</p>
                      <p className="text-xs text-muted-foreground">{rec.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
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
