import { testimonials } from "@/utils/testimonials"
import Image from "next/image"

export default function Component() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-12">
          What customers think about our product:
        </h2>
        
        <div className="grid md:grid-cols-[320px,1fr] gap-8 lg:gap-12 items-center">
          {/* Customer Profiles */}
          <div className="md:space-y-8 flex md:block overflow-auto gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-start gap-4  shrink-0">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile picture`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-white font-medium">{testimonial.name}</h3>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div>
            <blockquote className="text-white text-xl md:text-3xl leading-relaxed">
              "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus tellus eget nulla auctor in gravida nulla sagittis. Nam elementum interdum enim eu cursus felis. In eu nisi non sapien cursus eleifend ut vitae metus. Ut tincidunt pharetra ultricies. Aliquam quis dui nec justo elementum posuere. Nunc viverra a justo lacinia mollis. Etiam volutpat justo metus, aliquam finibus est luctus in. Nam eget ex vitae neque sagittis cursus ac interdum arcu."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}