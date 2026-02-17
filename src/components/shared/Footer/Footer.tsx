import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="bg-muted/40 mt-20 border-t">
            <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* SHOP INFO */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Habib & Brothers</h2>
                    <p className="text-muted-foreground mb-4">
                        Your trusted grocery shop for rice, oil, biscuits and daily essentials.
                        We provide quality products at the best price.
                    </p>

                    <div className="flex gap-4 mt-4 text-primary">
                        <Link href="#"><Facebook size={20} /></Link>
                        <Link href="#"><Instagram size={20} /></Link>
                        <Link href="#"><Youtube size={20} /></Link>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* CUSTOMER SERVICE */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms & Conditions</Link></li>
                        <li><Link href="#">Return Policy</Link></li>
                        <li><Link href="#">FAQ</Link></li>
                    </ul>
                </div>

                {/* CONTACT INFO */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                    <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={18} />
                            <span>+880 1703532130</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={18} />
                            <span>info@habibbrothers.com</span>
                        </div>
                    </div>
                </div>

            </div>

            <Separator />

            {/* BOTTOM BAR */}
            <div className="text-center text-sm text-muted-foreground py-6">
                © {new Date().getFullYear()} Habib & Brothers. All rights reserved.
            </div>
        </footer>
    )
}