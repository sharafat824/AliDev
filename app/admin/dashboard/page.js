// app/admin/dashboard/page.js
import { CustomBarChart, CustomPieChart } from "../_components/Charts";

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                    <p className="text-gray-500">Key metrics and statistics</p>
                </div>
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                    Generate Report
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <MetricCard title="Revenue" value="$120,000" trend="+12.5%" />
                <MetricCard title="Active Users" value="2,500" trend="+8.2%" />
                <MetricCard title="Conversion Rate" value="4.8%" trend="-1.2%" />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold">Revenue Overview</h3>
                    <CustomBarChart />
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold">User Distribution</h3>
                    <CustomPieChart />
                </div>
            </div>
        </div>
    );
}

function MetricCard({ title, value, trend }) {
    const isPositive = trend.startsWith("+");
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <div className="mt-4 flex items-baseline justify-between">
                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">{value}</p>
                <span className={`text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}>
                    {trend} {isPositive ? "↑" : "↓"}
                </span>
            </div>
        </div>
    );
}