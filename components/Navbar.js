"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Loading from "@/app/loading";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const { resolvedTheme } = useTheme();
    const { isSignedIn, user, isLoaded } = useUser();
    const logoSrc = resolvedTheme === "dark" ? "/images/dark-logo.png" : "/images/logo-0-bg.png";
    const logoHeightWidth = resolvedTheme === "dark" ? 180 : 200;
    const pathname = usePathname();
    return (
        <nav fallback={<Loading />} className="top-0 border-b bg-background/50 backdrop-blur sticky z-50">
            <div className="lg:mx-10 sm:mx-8 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <Image src={logoSrc} alt="Logo" width={logoHeightWidth} height={logoHeightWidth} priority />
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        {/* Links with a hover effect using font-bold */}
                        <Link
                            href="/"
                            className={`hover:scale-105 transition-transform duration-300 ${pathname === "/" ? "text-primary font-bold" : "hover:text-primary"}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`hover:scale-105 transition-transform duration-300 ${pathname === "/about" ? "text-primary font-bold" : "hover:text-primary"}`}
                        >
                            About
                        </Link>
                        <Link
                            href="/blogs"
                            className={`hover:scale-105 transition-transform duration-300 ${pathname === "/blogs" ? "text-primary font-bold" : "hover:text-primary"}`}
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/contact"
                            className={`hover:scale-105 transition-transform duration-300 ${pathname === "/contact" ? "text-primary font-bold" : "hover:text-primary"}`}
                        >
                            Contact
                        </Link>
                        {/* Buttons */}
                        <div className="flex items-center space-x-4">
                            {isSignedIn && isLoaded ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="px-4 py-2">
                                            {user?.firstName || "Account"}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem asChild>
                                            <Link href="/admin/dashboard">Dashboard</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <SignOutButton>
                                                <button className="w-full text-left">Sign Out</button>
                                            </SignOutButton>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <>
                                    <Button asChild className="py-2 w-full">
                                        <Link href="/sign-in">Login</Link>
                                    </Button>
                                    <Button asChild className="py-2 w-full">
                                        <Link href="/sign-up">Signup</Link>
                                    </Button>
                                </>
                            )}
                            <div>
                                <ModeToggle />

                            </div>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <Sheet>
                            <span className="mx-2">
                                <ModeToggle />
                            </span>
                            <SheetTrigger>
                                <button className="text-gray-700 hover:font-bold transition">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        ></path>
                                    </svg>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-background shadow-lg">
                                <SheetHeader className="text-center py-6">
                                    <SheetTitle className="text-2xl font-bold text-primary">AliBlog</SheetTitle>
                                    <SheetDescription className="text-sm text-gray-500">
                                        Explore the world of blogging with AliBlog
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="mt-6 flex flex-col space-y-6 px-4">
                                    <Link
                                        href="/"
                                        className={`text-lg font-medium transition ${pathname === "/" ? "text-primary font-bold" : "hover:underline hover:font-bold"}`}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/about"
                                        className={`text-lg font-medium transition ${pathname === "/about" ? "text-primary font-bold" : "hover:underline hover:font-bold"}`}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/blogs"
                                        className={`text-lg font-medium transition ${pathname === "/blogs" ? "text-primary font-bold" : "hover:underline hover:font-bold"}`}
                                    >
                                        Blogs
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={`text-lg font-medium transition ${pathname === "/contact" ? "text-primary font-bold" : "hover:underline hover:font-bold"}`}
                                    >
                                        Contact
                                    </Link>

                                    <div className="border-t border-gray-300 my-4"></div>
                                    {isSignedIn ? (
                                        <div className="flex items-center space-x-4">
                                            {/* Show user-specific options */}
                                            <span className="text-lg text-gray-800">{user.firstName}</span>
                                            <SignOutButton>
                                                <Button variant="outline" className="px-4 py-2 shadow-sm">Sign Out</Button>
                                            </SignOutButton>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-4">
                                            {/* Show login and signup buttons */}
                                            <Button asChild>
                                                <Link className="px-4 py-2 shadow-sm" href="/sign-in">Login</Link>
                                            </Button>
                                            <Button asChild>
                                                <Link className="px-4 py-2 shadow-sm" href="/sign-up">Signup</Link>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
