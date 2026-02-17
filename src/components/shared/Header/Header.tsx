"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Store, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 🔥 Replace this with your real auth hook
const useAuth = () => {
    // const user = {
    //     name: "Hasan",
    //     email: "hasan@gmail.com",
    // }; // null if not logged in
    const user = '';

    const logout = () => {
        console.log("Logged out");
    };

    return { user, logout };
};

export default function Navbar() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);

    const navLinks = (
        <>
            <Link href="/" className="hover:text-green-600 transition">
                Home
            </Link>
            <Link href="/about" className="hover:text-green-600 transition">
                About
            </Link>
            <Link href="/products" className="hover:text-green-600 transition">
                Products
            </Link>
        </>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Store className="text-green-600" />
                        <span className="text-xl font-bold text-green-700">
                            Habib & Brothers
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks}

                        {!user ? (
                            <>
                                <Link href="/login">
                                    <Button variant="ghost">Login</Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="bg-green-600 hover:bg-green-700">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2">
                                        <User size={18} />
                                        {user.name}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Link href="/profile">Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={logout}>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </nav>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-64">
                                <div className="flex flex-col gap-6 mt-8 text-base font-medium">

                                    {navLinks}

                                    {!user ? (
                                        <>
                                            <Link href="/login" onClick={() => setOpen(false)}>
                                                Login
                                            </Link>
                                            <Link href="/signup" onClick={() => setOpen(false)}>
                                                Sign Up
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/profile" onClick={() => setOpen(false)}>
                                                Profile
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setOpen(false);
                                                }}
                                                className="text-left"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </header>
    );
}