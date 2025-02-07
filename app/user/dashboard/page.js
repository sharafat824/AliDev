// app/user/dashboard/page.js
import Link from "next/link";
import { CustomBarChart, CustomPieChart } from "../_components/Charts";

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
                    <p className="text-gray-500">Your projects and activities</p>
                </div>
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                    View All Projects
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <MetricCard title="Active Projects" value="5" trend="+2" />
                <MetricCard title="Unread Messages" value="3" trend="-1" />
                <MetricCard title="Task Completion" value="78%" trend="+5%" />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold">Project Progress</h3>
                    <CustomBarChart />
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold">Task Distribution</h3>
                    <CustomPieChart />
                </div>
            </div>
        </div>
    );
}

function MetricCard({ title, value, trend }) {
    const isPositive = trend.startsWith("+");
    return (
        <Link href="/user/chat">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <div className="mt-4 flex items-baseline justify-between">
                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">{value}</p>
                <span className={`text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}>
                    {trend} {isPositive ? "↑" : "↓"}
                </span>
            </div>
        </div>
        </Link>
    );
}