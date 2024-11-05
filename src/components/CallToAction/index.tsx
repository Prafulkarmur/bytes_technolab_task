import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-[#252b43] rounded-lg p-8 md:p-12 text-center  mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Aliquam quis dui nec justo elementum posuere.
          </h2>
          <p className="text-slate-400 mb-8 max-w-4xl mx-auto">
            Vestibulum efficitur, magna eget egestas fringilla, dui nibh cursus velit, id tempus lorem est ut dui.
          </p>
          <Button variant="default" className="text-white px-8 rounded-full">
            Inquire Now
          </Button>
        </div>
      </div>
    </section>
  )
}