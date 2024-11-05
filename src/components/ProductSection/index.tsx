import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="bg-secondary min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="space-y-6 mb-16">
          <p className="text-slate-400">Products & Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Askitect AI</h1>
          <p className="text-slate-400 ">
            Aenean tristique, tellus id posuere tincidunt, enim tortor scelerisque quam, vitae faucibus felis nunc vitae nulla. Etiam tincidunt nisi sed quam tempor.
          </p>
          <Button className="text-white rounded-full px-6">
            Try Now
            <ArrowUpRight />
          </Button>
        </div>

        {/* Three Columns Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Maecenas eleifend</h3>
            <p className="text-slate-400">
              Curabitur sit amet lectus justo. Nullam accumsan velit quam, quis euismod dui sodales a. Proin non tincidunt neque.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Duis ac ipsum nulla</h3>
            <p className="text-slate-400">
              Aliquam pretium enim odio dapibus, non imperdiet lorem euismod. Curabitur blandit urna ante, ac accumsan lorem aliquat.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Duis laoreet posuere</h3>
            <p className="text-slate-400">
              Vivamus eros metus, vestibulum ut erat aliquam, pellentesque consectetur libero. Vestibulum laoreet dictum magna at suscipit.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">
            You may need our services if you want to:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Purchase Evaluation",
              "Pre Construction Consultation",
              "Construction Quality Evaluation"
            ].map((service, index) => (
              <Link
                key={index}
                href="#"
                className="block p-6 rounded-lg bg-[#2d325c] transition-colors"
              >
                <div className="flex justify-between flex-col items-start space-y-3">
                  <h3 className="text-white font-medium">{service}</h3>
                  <div className="flex items-center text-indigo-400 text-sm">
                    Learn More
                    <ArrowUpRight className=" ml-1s h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}