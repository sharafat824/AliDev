// app/admin/layout.js
"use client"; // Add this for interactivity
import { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Content */}
            <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-0"} lg:ml-64`}>
                <Header toggleSidebar={toggleSidebar} />
                <main className="p-4 lg:p-8">
                    <div className="mx-auto max-w-7xl">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}