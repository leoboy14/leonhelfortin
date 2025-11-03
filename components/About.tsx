import { FileText } from "lucide-react"

export default function About() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-xl font-bold">About</h2>
      </div>
      <div className="space-y-4 text-sm text-foreground leading-relaxed">
        <p>
          I&apos;m currently pursuing my Masters of Science in Computer Applications at MSU-Iligan Institute of Technology,
          building on my BS Computer Applications (Internet of Things) degree which I completed with Magna Cum Laude honors.
          As Chief Executive Officer of SIRENA AI since 2020, I develop and implement embedded machine learning products
          and secure key partnerships in the AIoT space.
        </p>
        <p>
          My expertise lies in Embedded Machine Learning, Artificial Intelligence of Things, and Data Analytics. I serve
          as Smart Cities Lead at the Center for Digital Iligan Innovation and Sustainability, where I create data science
          methodologies and secure funding for smart cities initiatives. In 2022, I was selected as Philippine Representative
          for Huawei Seeds for the Future program.
        </p>
        <p>
          I&apos;m passionate about building AIoT solutions using C/C++, Python, TensorFlow, and OpenCV. I founded Youth
          Network Iligan and serve as Vice-President for External Affairs at DEVCON Iligan Chapter to foster tech innovation
          in the community. My journey in technology began in 2014 with my first exposure to networks and VPN, evolving into
          a career dedicated to embedded ML and AIoT solutions.
        </p>
      </div>
    </div>
  )
}
