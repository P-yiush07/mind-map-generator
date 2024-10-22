"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GitFork, Github, Star, Users, Code, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  { name: "Alex Johnson", role: "UX Designer", comment: "Mind-Maps has revolutionized how I brainstorm and present ideas to clients. It's an indispensable tool in my workflow.", avatar: "/placeholder.svg?height=60&width=60" },
  { name: "Sarah Lee", role: "Project Manager", comment: "The collaborative features are game-changing for our remote team's productivity. We've seen a 30% increase in project clarity.", avatar: "/placeholder.svg?height=60&width=60" },
  { name: "Michael Chen", role: "Data Scientist", comment: "The AI-powered analysis in Mind-Maps helps me quickly identify patterns in complex datasets. It's a game-changer for my research.", avatar: "/placeholder.svg?height=60&width=60" },
  { name: "Emily Rodriguez", role: "Marketing Strategist", comment: "I use Mind-Maps to plan our marketing campaigns. It's intuitive and helps me communicate strategies effectively to stakeholders.", avatar: "/placeholder.svg?height=60&width=60" },
]

export function OpenSource() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setDirection(1)
    }, 8000) // Change testimonial every 8 seconds

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setDirection(1)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setDirection(-1)
  }

  return (
    <section className="w-full py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-6 text-gray-900 leading-tight"
          >
            Open Source and <span className="text-blue-600">Community-Driven</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 mb-10 leading-relaxed"
          >
            Mind-Maps is proudly open-source. Join our thriving community, contribute your ideas, and help shape the future of information visualization.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            <Link 
              href="https://github.com/P-yiush07/mind-map-generator" 
              target="_blank" 
              className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <Github className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">View on GitHub</span>
            </Link>
            <div className="flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full">
              <Star className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">1.2k Stars</span>
            </div>
            <div className="flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
              <GitFork className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">234 Forks</span>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Repository Insights</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 mr-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">52</p>
                  <p className="text-gray-600">Contributors</p>
                </div>
              </div>
              <div className="flex items-center">
                <Code className="w-8 h-8 mr-4 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">15,000+</p>
                  <p className="text-gray-600">Lines of Code</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-8 h-8 mr-4 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2 days ago</p>
                  <p className="text-gray-600">Last Updated</p>
                </div>
              </div>
            </div>
            <Button className="mt-8 w-full" size="lg">
              Contribute Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Community Testimonials</h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden h-[250px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? 1000 : -1000,
                      opacity: 0,
                    }),
                    center: {
                      zIndex: 1,
                      x: 0,
                      opacity: 1,
                    },
                    exit: (direction: number) => ({
                      zIndex: 0,
                      x: direction < 0 ? 1000 : -1000,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute top-0 left-0 right-0 bottom-0 p-6"
                >
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonials[currentTestimonial].comment}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}