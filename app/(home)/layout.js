import Navbar from "@/components/Navbar";



export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            {/* Main Content */}
            <div className="min-h-screen pb-20"> {/* Added padding for footer space */}
                {children}
            </div>
            {/* Fixed Footer */}
            <footer className="w-full py-4  shadow-lg theme-bg">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-sm md:text-base">
                        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}