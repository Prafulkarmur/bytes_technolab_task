import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <section className="bg-secondary px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Blandit turpis ut augue pulvinar rutrum.
            </h2>
            <p className="text-gray-300">
              Maecenas sit amet dui et purus imperdiet venenatis. Donec eleifend arcu vulputate dictum blandit. Pellentesque hendrerit congue nunc, eget cursus mauris efficitur vel. Proin et nunc ultrices libero pharetra congue vitae sit amet odio. Fusce quis quam quis erat congue efficitur. Curabitur magna diam, interdum sed tincidunt et, finibus et ipsum. Cras justo mauris imperdiet vitae metus vel placerat nunc.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {["AI", "Insight", "Advanced Analytics"].map((title, index) => (
              <Card key={index} className="relative overflow-hidden rounded-xl bg-transparent">
                <div className="absolute inset-0 rounded-xl border border-gray-700 opacity-50"></div>
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#5D6BF8]"></div>
                <CardHeader>
                  <CardTitle className="text-white">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-300">
                  {index === 0 && "Our AI-powered platform is designed to identify patterns, detect issues, and we pour resources to discover meaningful insights. It evolves you upload, it's learning from your items you data to give AI-driven, instant feedback every time."}
                  {index === 1 && "We don't just detect problems, we provide meaningful and actionable insights so you can understand what's going on. Just ask through our AI if it can wait, or give it to help you decide what to do decisions about your items."}
                  {index === 2 && "Using sophisticated graphs and charts, we analyze your data efficiently and give you detailed, actionable insights to ensure you get comprehensive advice and recommendations, making it easy to keep your projects on track."}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}