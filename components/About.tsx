import { FileText } from "lucide-react"

export default function About() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <FileText className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-base font-bold">About</h2>
      </div>
      <div className="max-w-3xl space-y-3 text-sm text-foreground leading-relaxed">
        <p>
          My tech journey began as a curious kid dismantling toys to understand how they worked. In high school, I explored networks and cybersecurity. When the pandemic hit in 2020, I shifted my focus to <span className="font-semibold">AI and TinyML</span>—and founded <span className="font-semibold">SIRENA AI</span> to develop embedded solutions for drowning detection.
        </p>

        <p>
          I&apos;m currently pursuing my <span className="font-semibold">Masters in Computer Applications</span> at MSU-IIT, building on my <span className="font-semibold">Magna Cum Laude</span> BS degree in IoT. As <span className="font-semibold">Smart Cities Lead</span> at the Center for Digital Iligan Innovation and Sustainability, I create data science methodologies using <span className="font-semibold">C/C++, Python, TensorFlow, and OpenCV</span> to solve real-world challenges.
        </p>

        <p>
          In 2022, I was selected as <span className="font-semibold">Philippine Representative for Huawei Seeds for the Future</span>. Beyond my technical work, I&apos;m committed to fostering tech innovation in Iligan City as founder of <span className="font-semibold">Youth Network Iligan</span> and <span className="font-semibold">Vice-President for External Affairs at DEVCON Iligan Chapter</span>.
        </p>
      </div>
    </div>
  )
}
