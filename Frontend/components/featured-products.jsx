import { Card } from "./ui/card"
import Image from "next/image"

const products = [
  {
    name: "Maple Syrup",
    description: "Premium Canadian maple syrup and products",
    image: "/pics/maple_syrup.jpeg",
  },
  {
    name: "Agricultural Products",
    description: "High-quality grains and agricultural goods",
    image: "/pics/agri_products.jpeg",
  },
  {
    name: "Metals",
    description: "Quality metals and mineral resources",
    image: "/pics/metal.jpg",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="h-56 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"  // ✅ fits inside box
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
