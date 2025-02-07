// app/admin/_components/Sidebar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaCogs, FaChartLine, FaUsers, FaFileAlt } from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
    const pathName = usePathname();

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <nav
                className={`fixed left-0 top-0 z-40 h-full w-64 transform border-r border-gray-200 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}
            >
                <div className="p-6">
                    <h2 className="mb-10 text-center text-3xl font-bold text-indigo-600">
                        Dashboard
                    </h2>
                    <ul className="space-y-2">
                        {[{ icon: <FaTachometerAlt />, text: "Dashboard", href: "/admin/dashboard" },
                        { icon: <FaUsers />, text: "Users", href: "/admin/users" },
                        { icon: <FaChartLine />, text: "Analytics", href: "/admin/analytics" },
                        { icon: <FaFileAlt />, text: "Reports", href: "/admin/reports" },
                        { icon: <FaCogs />, text: "Settings", href: "/admin/settings" }]
                            .map((item) => {
                                const isActive = pathName.startsWith(item.href);

                                return (
                                    <li key={item.text}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center space-x-3 rounded-lg p-3 transition-all ${
                                                isActive
                                                    ? "bg-indigo-100 text-indigo-700 border-l-4 border-indigo-500 pl-2.5"
                                                    : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                                            }`}
                                        >
                                            <span
                                                className={`text-lg ${
                                                    isActive ? "text-indigo-600" : "text-gray-500"
                                                }`}
                                            >
                                                {item.icon}
                                            </span>
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </nav>
        </>
    );
}
