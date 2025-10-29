import { Card } from "./ui/card"

const products = [
  {
    name: "Maple Syrup",
    description: "Premium Canadian maple syrup and products",
    image: "/canadian-maple-syrup-bottles.jpg",
  },
  {
    name: "Agricultural Products",
    description: "High-quality grains and agricultural goods",
    image: "/wheat-grains-agriculture.jpg",
  },
  {
    name: "Lumber",
    description: "Sustainable Canadian lumber and wood products",
    image: "/lumber-wood-planks.jpg",
  },
  {
    name: "Honey",
    description: "Natural honey and bee products",
    image: "/honey-jars-natural.jpg",
  },
  {
    name: "Metals",
    description: "Quality metals and mineral resources",
    image: "/metal-ingots-industrial.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Product Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the diverse range of Canadian products we help trade globally
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
