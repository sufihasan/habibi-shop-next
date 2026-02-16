// "use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Facebook, Youtube, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function StayConnectedSection() {
    return (
        <section className="bg-muted/40 py-16 px-4">
            <div className="max-w-7xl mx-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT PART */}
                <Card className="p-8 flex flex-col items-center text-center shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Stay Connected
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Exclusive offers<br />
                        Subscribe to our news and get updated about exclusive offers!
                    </p>

                    <div className="flex w-full max-w-sm gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1"
                        />
                        <Button>Subscribe</Button>
                    </div>
                </Card>

                {/* RIGHT PART */}
                <Card className="p-8 flex flex-col items-center text-center shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Get Social
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Join us in the group<br />
                        and be the first to know all promotions and offers!
                    </p>

                    <div className="flex gap-6 text-primary">
                        <a href="#" className="hover:scale-110 transition">
                            <Facebook size={28} />
                        </a>
                        <a href="#" className="hover:scale-110 transition">
                            <Youtube size={28} />
                        </a>
                        <a href="#" className="hover:scale-110 transition">
                            <FaWhatsapp size={28} />
                        </a>
                        <a href="#" className="hover:scale-110 transition">
                            <Instagram size={28} />
                        </a>
                    </div>
                </Card>

            </div>
        </section>
    )
}