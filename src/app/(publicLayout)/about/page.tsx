// "use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, MapPin, Store, ShoppingBasket } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Welcome to Habib and Brothers
                    </h1>
                    <p className="text-base md:text-lg max-w-2xl mx-auto">
                        Your trusted grocery partner in Goila, Agailjhara, Barisal.
                        Fresh products, affordable prices, and quality service — all in one place.
                    </p>
                    <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                        Shop With Us
                    </Button>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                            Who We Are
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Habib and Brothers is a trusted local grocery store serving the
                            community with honesty and care. We provide all kinds of daily
                            essentials including rice, oil, biscuits, noodles, dal, sugar,
                            spices, and all types of mudi items.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our goal is to deliver quality products at the best price while
                            ensuring customer satisfaction. We believe in building long-term
                            relationships with our customers.
                        </p>
                    </div>

                    <Card className="shadow-lg rounded-2xl">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <ShoppingBasket className="text-green-600" />
                                <p>All kinds of grocery & daily essentials</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Store className="text-green-600" />
                                <p>Fresh and quality products</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-green-600" />
                                <p>Goila, Agailjhara, Barisal</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-green-600" />
                                <p>01703532130</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Separator />

            {/* Mission Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        To provide high-quality grocery products at affordable prices
                        while maintaining trust, honesty, and excellent customer service.
                        We aim to make daily shopping easy, convenient, and reliable for
                        every family in our community.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-green-50">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Visit Our Store
                    </h2>
                    <p className="text-gray-600">
                        📍 Goila, Agailjhara, Barisal <br />
                        📞 01703532130
                    </p>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                        Call Now
                    </Button>
                </div>
            </section>

        </div>
    );
}