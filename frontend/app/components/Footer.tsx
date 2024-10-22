import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Features</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Pricing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Tutorial</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Documentation</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2024 Mind-Maps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

