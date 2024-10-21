import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import logo from "../LOGO.png"
import { GitFork, Github, Star, Users, FileText, Brain } from "lucide-react"

export function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-24 flex items-center justify-between border-b">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src={logo}
            alt="Mind-Maps Logo"
            width={200}
            height={60}
            className="h-16 w-auto object-contain"
          />
          <span className="sr-only">Mind-Maps</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-[90vh] flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your PDFs into Mind Maps
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Visualize complex information with ease. Our AI-powered tool converts your PDFs into interactive mind maps.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto">Get Started</Button>
                  <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
                </div>

                {/* Trust indicators with increased spacing */}
                <div className="mt-16 pt-16">
                  <h3 className="text-xl font-semibold text-gray-700 mb-8">Trusted by professionals worldwide</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                      <Users className="w-12 h-12 text-blue-500 mb-4" />
                      <span className="text-2xl font-bold text-gray-800 mb-2">10,000+</span>
                      <span className="text-sm text-gray-600">Active Users</span>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                      <FileText className="w-12 h-12 text-green-500 mb-4" />
                      <span className="text-2xl font-bold text-gray-800 mb-2">50,000+</span>
                      <span className="text-sm text-gray-600">PDFs Processed</span>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                      <Brain className="w-12 h-12 text-purple-500 mb-4" />
                      <span className="text-2xl font-bold text-gray-800 mb-2">100,000+</span>
                      <span className="text-sm text-gray-600">Mind Maps Created</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-full h-auto max-w-[400px]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="250" r="200" fill="#F3F4F6" />
                  <circle cx="250" cy="250" r="150" fill="#E5E7EB" />
                  <circle cx="250" cy="250" r="100" fill="#D1D5DB" />
                  <circle cx="250" cy="250" r="20" fill="#4B5563" />
                  <line x1="250" y1="50" x2="250" y2="450" stroke="#4B5563" strokeWidth="2" />
                  <line x1="50" y1="250" x2="450" y2="250" stroke="#4B5563" strokeWidth="2" />

                  <g className="node-group">
                    <circle cx="250" cy="100" r="30" fill="#60A5FA" />
                    <text x="250" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 1</text>
                  </g>

                  <g className="node-group">
                    <circle cx="400" cy="250" r="30" fill="#34D399" />
                    <text x="400" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 2</text>
                  </g>

                  <g className="node-group">
                    <circle cx="250" cy="400" r="30" fill="#F87171" />
                    <text x="250" y="405" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 3</text>
                  </g>

                  <g className="node-group">
                    <circle cx="100" cy="250" r="30" fill="#FBBF24" />
                    <text x="100" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 4</text>
                  </g>

                  <line x1="250" y1="130" x2="250" y2="230" stroke="#4B5563" strokeWidth="2" />
                  <line x1="370" y1="250" x2="270" y2="250" stroke="#4B5563" strokeWidth="2" />
                  <line x1="250" y1="370" x2="250" y2="270" stroke="#4B5563" strokeWidth="2" />
                  <line x1="130" y1="250" x2="230" y2="250" stroke="#4B5563" strokeWidth="2" />

                  <text x="250" y="255" textAnchor="middle" fill="#1F2937" fontSize="16" fontWeight="bold">Main Concept</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Improved Open Source and Community-Driven section */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Open Source and Community-Driven</h3>
              <p className="text-xl text-gray-600 mb-10">
                Mind-Maps is proudly open-source. Join our community, contribute, and help shape the future of information visualization.
              </p>
              <div className="flex justify-center items-center space-x-8">
                <Link href="https://github.com/mind-maps/repo" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  <Github className="w-8 h-8 mr-2" />
                  <span className="text-lg font-semibold">GitHub</span>
                </Link>
                <div className="flex items-center text-gray-700">
                  <Star className="w-8 h-8 mr-2 text-yellow-500" />
                  <span className="text-lg font-semibold">1.2k Stars</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <GitFork className="w-8 h-8 mr-2 text-green-500" />
                  <span className="text-lg font-semibold">234 Forks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg
                    className="text-primary w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">PDF to Mind Map</h3>
                <p className="text-gray-500">Convert any PDF document into an interactive, visually appealing mind map with just a few clicks.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg
                    className="text-primary w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-500">Our advanced AI technology extracts key concepts and relationships from your documents with high accuracy.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg
                    className="text-primary w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customizable Maps</h3>
                <p className="text-gray-500">Easily edit, rearrange, and customize your mind maps to fit your specific needs and preferences.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Visualize Your Ideas?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who are already using Mind-Maps to enhance their productivity and creativity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button className="w-full min-[400px]:w-auto">Get Started Now</Button>
                <Button variant="outline" className="w-full min-[400px]:w-auto">View Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Mind-Maps. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
