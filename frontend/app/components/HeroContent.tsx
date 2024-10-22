import { Button } from "@/components/ui/button"

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Transform Your PDFs into Mind Maps
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto lg:mx-0">
          Visualize complex information with ease. Our AI-powered tool converts your PDFs into interactive mind maps.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button className="w-full sm:w-auto">Get Started</Button>
        <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
      </div>
    </div>
  )
}

