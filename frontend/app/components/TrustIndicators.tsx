import { Users, FileText, Brain } from "lucide-react"

export function TrustIndicators() {
  return (
    <div className="mt-16 pt-8">
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
  )
}

