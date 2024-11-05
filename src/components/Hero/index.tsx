"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { DialogTitle } from "@radix-ui/react-dialog"

export default function Component() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navigation = [
        { name: "Askitect AI", href: "#" },
        { name: "Solutions", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Contact Us", href: "#" },
    ]

    return (
        <div className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/homepage.webp?height=1080&width=1920"
                    alt="Modern architecture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/60" />
            </div>

            {/* Header */}
            <header className="relative z-10">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
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

                        {/* Desktop Navigation */}

                        <div className="hidden md:flex items-center gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Language Selector */}
                            <Button variant="ghost" className="text-white hover:bg-transparent">
                                <Image
                                    src="/images/us.webp?height=20&width=30"
                                    alt="US Flag"
                                    width={20}
                                    height={15}
                                    className="mr-1"
                                />
                                <ChevronDown />
                            </Button>

                            {/* Auth Buttons */}
                            <Button variant="default" className="text-white rounded-full">
                                Log In
                            </Button>
                            <Button variant="outline" className="text-white bg-secondary rounded-full">
                                Sign up
                            </Button>
                        </div>

                        {/* Mobile Menu Trigger */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="md:hidden text-white">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full bg-[#1a1f36] p-0">
                                <DialogTitle className="sr-only">Menu</DialogTitle>
                                <div className="flex flex-col h-full">
                                    <div className="p-4 flex justify-between items-center border-b border-slate-700">
                                        <Link href="/" className="flex items-center text-white" onClick={() => setIsOpen(false)}>
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
                                        <Button variant="ghost" className="text-white" onClick={() => setIsOpen(false)}>
                                            <X className="h-6 w-6" />
                                        </Button>
                                    </div>
                                    <div className="flex-1 overflow-auto py-4">
                                        <nav className="flex flex-col space-y-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-white/90 hover:text-white px-4 py-2 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 border-t border-slate-700 space-y-4">
                                        <Button className="w-full text-white rounded-full">
                                            Log In
                                        </Button>
                                        <Button variant="outline" className="w-full bg-secondary rounded-full text-white">
                                            Sign up
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="relative z-10 flex items-center min-h-screen">
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
                        Vivamus pretium elit, venenatis quam scelerisque non.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        Fusce egestas fermentum tellus ac sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button className="mt-8 text-white px-8 rounded-full">
                        Let&apos;s Start
                        <ArrowUpRight />
                    </Button>
                </div>
            </main>
        </div>
    )
}