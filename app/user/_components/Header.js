// app/admin/_components/AdminHeader.js
"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header({ toggleSidebar }) {
    const { user } = useUser();
    

    return (
        <header className="sticky top-0 z-40 bg-white shadow-md backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
                {/* Mobile Menu Button */}
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden focus:outline-none"
                >
                    <svg
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Title and User Info */}
                <div className="flex-1 lg:flex-none">
                    <h1 className="text-xl font-bold text-gray-900 lg:text-2xl">
                        Client Console
                    </h1>
                    <p className="text-sm text-gray-500">
                        Welcome back, {user?.fullName || user?.primaryEmailAddress?.emailAddress || "Administrator"}
                    </p>
                </div>

                {/* User Profile */}
                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm font-medium text-gray-700">
                                    {user.fullName || user.primaryEmailAddress?.emailAddress}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {user.primaryEmailAddress?.emailAddress}
                                </p>
                            </div>
                            <UserButton/>
                        </div>
                    ) : (
                        <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
                    )}
                </div>
            </div>
        </header>
    );
}