import { HeroContent } from "./HeroContent"
import { TrustIndicators } from "./TrustIndicators"
import { MindMapIllustration } from "./MindMapIllustration"

export function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <HeroContent />
            <TrustIndicators />
          </div>
          <MindMapIllustration />
        </div>
      </div>
    </section>
  )
}
