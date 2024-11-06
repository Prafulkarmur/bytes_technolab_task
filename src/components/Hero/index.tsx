"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function Component() {
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