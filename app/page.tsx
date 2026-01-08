import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { Map, BookOpen, NotebookPen } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-[color:var(--border-color)] bg-gradient-to-b from-[color:var(--bg)] to-[color:var(--card)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl text-balance">
                Welcome to the Computing Department 
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--muted)] leading-relaxed text-pretty">
                Explore your academic journey and discover the resources available to help you succeed in your computer
                science education.
              </p>
            </div>

            {/* Decorative placeholder for illustration */}
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--card)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-24 w-24 rounded-full bg-[color:var(--primary-color)]/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-12 w-12 text-[color:var(--primary-color)]" />
                    </div>
                    <p className="text-[color:var(--muted)]">Hero Illustration Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <FeatureCard
                title="Degree Planner"
                description="Plan your academic journey with our interactive course roadmap. Drag and drop courses to create your personalized degree plan and track your progress towards graduation."
                href="/roadmap"
                icon={NotebookPen}
              />
              <FeatureCard
                title="Department Book"
                description="Browse through our comprehensive department handbook. Learn about our programs, faculty, research opportunities, and everything you need to know about the CS department."
                href="/dept-book"
                icon={BookOpen}
              />
              <FeatureCard
                title="Road Map"
                description="Browse through our comprehensive department handbook. Learn about our programs, faculty, research opportunities, and everything you need to know about the CS department."
                href="/tree"
                icon={Map}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
