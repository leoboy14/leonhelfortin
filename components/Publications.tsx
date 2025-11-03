import { BookOpen, ChevronDown } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const publications = [
  {
    year: "2025",
    title: "Performance Analysis of YOLO versions for Real-time Pothole Detection",
    authors: "LV Fortin, OE Llantos",
    venue: "Procedia Computer Science 257, 77-84",
    citations: "3",
  },
  {
    year: "2024",
    title: "Eyeway: An Artificial Intelligence Of Things Pothole Detection System With Map Visualization",
    authors: "LV Fortin, ARVD Santos, PJB Cagud, PR Castor, OE Llantos",
    venue: "Procedia Computer Science 251, 216-223",
    citations: "1",
  },
]

const highSchoolResearch = [
  {
    title: "Superabsorbent Polymer out of Pomelo (Citrus maxima) Peelings and Avocado (Persea americana) Peelings",
    description: "This research explores the development of an eco-friendly superabsorbent polymer from waste materials like pomelo and avocado peelings, aiming to provide a sustainable solution for water conservation in agriculture.",
    abstract: "Local farmers and agriculture are greatly afflicted brought on by dry weather conditions and lack of regular rainfalls, calling of a need to conserve water during prolonged drought stress condition. However, water conservative technology of Superabsorbent polymer SAPs is a suitable solution. Its great water absorption capability improves soil moisture yet most of the commercialized SAPs are crafted out from chemicals, considering its component this causes harmful effect on the environment and to the consumers as well. \nThus, the researchers look for an alternative product, Pomelo (Citrus maxima) peelings and Avocado (Persea americana) peelings as Superabsorbent polymer which is made out of completely wasted materials. The study aims to (1) to determine the significant difference between the different solutions in the absorptivity of the Superabsorbent polymer, (2) to determine the significant difference among the three treatments in terms of absorptivity of best solution in producing a Superabsorbent polymer and (3) to determine the significant difference between the absorptivityof the studied Superabsorbent polymer from the existing absorbent commercialize chemicals.\nThe study employed the Experimental Method. Using Photopolymerization, results showed that Pomelo Peel Solution has the greatest absortivity.The comparison among the treatments from the Pomelo Peel Solution showed that the third treatment has the highest level of absorptivity. It was observed that with the application of the water absorption formula “Pomelo peel micxture” dispayed the strongest water absorbing ability of 43.9%.The acrylic Sap displayed a water absorbing ability of 74.7% while pectin and starch fell below 70%. \nKEYWORDS: Pomelo; Avocado; Superabsorbent Polymer; Absorptivity; Photopolymeriation;"
  },
  {
    title: "Solar Powered PWD (Proximity Warning Device) For VIP (Visually Impaired Person)",
    description: "A solar-powered wearable device that uses ultrasonic sensors to help visually impaired individuals navigate safely by providing voice alerts about nearby obstacles, holes, and humps.",
    abstract: "Getting around safely without walking into obstacles as well as hole and humps can be tricky.\nBut a new portable device to be worn by a person with visual impairments may make walking much safer\nby warning impending collisions. Solar Powered Proximity Warning Device for Person with Blindness is\nan innovative gadget designed for a person with visual impalements or complete blindness. By using this\ndevice, the blind person doesn’t need to use a stick or a dog for helping him or her to avoid collision. An\nalgorithm was created to determine the distance and the type of obstructions in front of the user. Earphone\nwhere used to avoid disturbance to other people and to relay the voice response of the device either to\ncontinue walking or to turn right. Low cost ultrasonic sensordetects obstructions along the way. The device\nis prevailing in terms of the looks, the ability to distinguish obstacles, holes and humps, low cost, adjustable,\nenvironmental and user-friendly, and accurate.. The device is proved accurate when we tried it or the\ndistance 10cm, 20cm, 40cm, 60cm, 80cm, 100cm and 120cm. It takes three weeks for the researcher to\nfinally design the device completely.\nKeyword - Ultrasonic sensor, Arduino Uno Microcontroller, Solar, Visually Impaired Person, Alarm system"
  },
  {
    title: "Project iWAS (Intelligent Warning and Alarm System) on Flood",
    description: "An intelligent flood warning system that uses rain gauges and water level sensors to monitor and provide early warnings for rising water levels, enhancing community safety during heavy rainfall.",
    abstract: "Flood is an overflow of water over a region of dry land that is dry under usual conditions. There are several events that can lead to a flood some of these are heavy rain pours, melting ice lands, rising sea levels and the overflowing rivers, bad drainage and many more. It is a natural phenomenon here in the Philippines. By the help of iWAS(Intelligent Warning and Alarm System) on Flood it makes the community more secure for it can detect if the water level on highlands is highly increasing. Thus, by the use of Rain gauge, the amount of rainwater can be measure. The study aims (1) to verify the relationship between the Water level and Warning lights and (2) to determine the relationship between the Water level and the Rain gauge on the different responses. The study employed Experimental method using Pearson's R Correlation and results to effectiveness. By using Pearson's R Correlation, it answers two conclusions (1) that there is a significant relationship between the Water level and the Warning lights and (2) there is a significant relationship between the Water level and the Rain gauge on the different responses. "
  },
  {
    title: "Paperless Examination System (PES)",
    description: "A mobile application designed to reduce environmental impact and improve efficiency in examination systems by eliminating paper-based testing and streamlining the archiving process for answer sheets.",
    abstract: "Paperless examination plays an important role in modern education, which can effectively reduce the teachers' workload and improve work efficiency. However, the current examination system mainly makes use of papers which is toxic to our environment. There is by far no established practical alternative to the existing examination system. This system will also make the archiving of answer sheets a hassle-free process. With the help of some schematic diagrams of previous studies, and guidance from programming teachers, the researchers successfully fulfilled what they aimed to design. The mobile app is proved to be accurate when tested. It took two weeks for the researchers to finally design the application. \n\nThe researchers are open for recommendation and suggestions to further enhance the app. In the present, the parameter of the study focuses only within the classroom. The researchers however aim to recommend the system to various educational institutions."
  }
]

export default function Publications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <span>Research</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {pub.title}
                </h3>
                <p className="text-xs text-muted-foreground">{pub.authors}</p>
                <p className="text-xs text-muted-foreground italic">{pub.venue}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{pub.year}</span>
                  <span>•</span>
                  <span>{pub.citations} citations</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">High School Research</h2>
          <div className="space-y-6">
            {highSchoolResearch.map((research, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {research.title}
                </h3>
                <p className="text-xs text-muted-foreground">{research.description}</p>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>View Abstract</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-xs text-muted-foreground mt-2 whitespace-pre-line">
                      {research.abstract}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
