import Link from "next/link"

export const metadata = {
  title: "ZenGrow Trade Blog | Market Insights & Export Opportunities",
  description:
    "Explore expert insights, trade trends, and global export opportunities from ZenGrow Trade Ltd.",
  alternates: {
    canonical: "https://www.zengrowtrade.com/blog",
  },
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ZenGrow Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights on Canadian exports, global trade trends, and strategies for buyers and suppliers.
          </p>
        </div>

        {/* Blog List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Blog Card */}
          <Link
            href="/blog/top-10-products-canada-export-2025"
            className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200"
          >
            <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
              Top 10 Products Canada Can Export in 2025
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              A breakdown of Canada’s strongest export categories and where global demand is rising.
            </p>
            <span className="text-primary font-medium group-hover:underline">
              Read more →
            </span>
          </Link>

          {/* More cards later… */}
          <div className="opacity-40 border border-dashed rounded-xl p-6 flex items-center justify-center text-muted-foreground text-sm">
            More articles coming soon…
          </div>

        </div>
      </div>
    </div>
  )
}
