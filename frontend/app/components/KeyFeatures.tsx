import { Zap, FileText, Share2 } from "lucide-react"

export function KeyFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Zap className="h-10 w-10 text-blue-500" />
            <h3 className="text-xl font-bold">AI-Powered Conversion</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our advanced AI algorithms quickly transform your PDFs into accurate and insightful mind maps.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <FileText className="h-10 w-10 text-green-500" />
            <h3 className="text-xl font-bold">Multiple File Support</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Upload and convert multiple PDFs at once, saving you time and streamlining your workflow.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <Share2 className="h-10 w-10 text-purple-500" />
            <h3 className="text-xl font-bold">Easy Sharing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Share your mind maps with colleagues or embed them in your presentations with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

