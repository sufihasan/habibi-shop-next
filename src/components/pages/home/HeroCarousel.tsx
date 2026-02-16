"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function HeroCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    )

    const slides = [
        {
            title: "Fresh Rice Collection",
            desc: "Best quality rice for your family",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
        },
        {
            title: "Premium Cooking Oil",
            desc: "Healthy & pure oil",
            image: "https://images.unsplash.com/photo-1604908177522-3c4e16e4d4ad"
        },
        {
            title: "Snacks & Biscuits",
            desc: "Delicious treats for everyone",
            image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
        }
    ]

    return (
        <div className="mx-20">
            <div className="w-full max-w-7xl mx-auto py-8">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                >
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                <Card className="overflow-hidden rounded-2xl">
                                    <CardContent className="relative p-0">
                                        <div className="relative w-full h-[300px] md:h-[450px]">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                priority={index === 0} // First image loads faster (better LCP)
                                                className="object-cover"
                                                sizes="100vw"
                                            />
                                        </div>

                                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                                            <h2 className="text-2xl md:text-4xl font-bold">
                                                {slide.title}
                                            </h2>
                                            <p className="mt-2 text-sm md:text-lg">
                                                {slide.desc}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}