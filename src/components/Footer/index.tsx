import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Component() {
    return (
        <footer className="relative bg-gradient-to-t from-[#2B3167] to-[#1B1F38] px-4 py-12 md:px-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Logo and Nav Section */}
                    <div className="flex flex-col gap-8 md:flex-col md:items-start  col-span-2 justify-between ">
                        <div className="flex items-center gap-2">
                            <div className="flex items-start">
                                <Link href="/" className="flex items-center text-white">
                                    <svg
                                        className="h-6 w-6 mr-2"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                    </svg>
                                    Askitect
                                </Link>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                            <a href="#" className="text-sm text-gray-300 hover:text-white">
                                About Us
                            </a>
                            <a href="#" className="text-sm text-gray-300 hover:text-white">
                                Contact Us
                            </a>
                            <a href="#" className="text-sm text-gray-300 hover:text-white">
                                Terms & Conditions
                            </a>
                            <a href="#" className="text-sm text-gray-300 hover:text-white">
                                Privacy Policy
                            </a>
                        </nav>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-white">Join our mailing list</h3>
                        <p className="text-sm text-gray-300">
                            Subscribe to get the latest news and updates right to your inbox.
                        </p>
                        <div className="mt-2 flex max-w-sm flex-col gap-3 sm:flex-row">
                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="bg-[#1B1F38]/50 text-white placeholder:text-gray-400"
                            />
                            <Button className="text-white rounded-full">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-800 pt-8 md:flex-row md:justify-between">
                    <p className="text-sm text-gray-400">© 2024 Askitect. All rights reserved</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Youtube className="h-5 w-5" />
                            <span className="sr-only">YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

{/* <div className="flex items-start">
<Link href="/" className="flex items-center text-white">
  <svg
    className="h-6 w-6 mr-2"
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
  Askitect
</Link>
</div> */}