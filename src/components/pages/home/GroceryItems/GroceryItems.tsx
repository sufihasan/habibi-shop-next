import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
    {
        id: 1,
        name: "Premium Basmati Rice",
        image: "https://i.ibb.co.com/ycFbqxwZ/image.png",
        price: 950,
        oldPrice: 1100,
        discount: "15% OFF",
    },
    {
        id: 2,
        name: "Fresh Soybean Oil",
        image: "https://i.ibb.co.com/3YBTV8fN/image.png",
        price: 780,
        oldPrice: 850,
        discount: "10% OFF",
    },
    {
        id: 3,
        name: "Butter Cookies Pack",
        image: "https://i.ibb.co.com/B50myGCk/image.png",
        price: 250,
        oldPrice: 300,
        discount: "20% OFF",
    },
    {
        id: 4,
        name: "Butter Cookies Pack",
        image: "https://i.ibb.co.com/Xfp7hMGG/image.png",
        price: 250,
        oldPrice: 300,
        discount: "20% OFF",
    },
]

export default function GroceryItems() {
    return (
        <section className="py-10 mx-10 bg-muted/30">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Grocery Items
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Grab the best offers before they are gone!
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="group gap-0 overflow-hidden shadow-md hover:shadow-xl transition">

                            {/* Image Section */}
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300"
                                />

                                {/* Discount Badge */}
                                <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                                    {product.discount}
                                </Badge>
                            </div>

                            {/* Content */}
                            <CardContent className="text-center  mt-0">
                                <h3 className="font-semibold text-lg mb-1">
                                    {product.name}
                                </h3>

                                <div className="flex justify-center items-center gap-3 mb-2">
                                    <span className="text-lg font-bold text-primary">
                                        ৳{product.price}
                                    </span>
                                    <span className="text-sm line-through text-muted-foreground">
                                        ৳{product.oldPrice}
                                    </span>
                                </div>

                                <Button className="w-full">
                                    Add to Cart
                                </Button>
                            </CardContent>

                        </Card>
                    ))}
                </div>

                <div className="flex justify-center pt-6">
                    <Button className="">See More Exclusive Deals</Button>
                </div>

            </div>
        </section>
    )
}