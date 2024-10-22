import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { KeyFeatures } from "./components/KeyFeatures"
import { OpenSource } from "./components/OpenSource"
import { Footer } from "./components/Footer"
import { CTA } from "./components/CTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <OpenSource />
        <KeyFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
