import Link from "next/link"
import Image from "next/image"
import logo from "../LOGO.png"

export function Header() {
  return (
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
  )
}

