// app/admin/_components/AdminFooter.js
export default function AdminFooter() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-8 py-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>&copy; {new Date().getFullYear()} Your Company</span>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-indigo-600">Privacy</a>
                        <a href="#" className="hover:text-indigo-600">Terms</a>
                        <a href="#" className="hover:text-indigo-600">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}