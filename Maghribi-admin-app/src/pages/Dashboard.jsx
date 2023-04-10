import React from "react";

const Dashboard = () => {
    return (
        <div className="flex-1 py-4 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-medium mb-2">Users</h2>
                    <p className="text-gray-500 text-sm">Total number of registered users</p>
                    <p className="text-2xl font-bold text-green-500">1,234</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-medium mb-2">Sales</h2>
                    <p className="text-gray-500 text-sm">Total sales for the month</p>
                    <p className="text-2xl font-bold text-blue-500">$12,345</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-medium mb-2">Orders</h2>
                    <p className="text-gray-500 text-sm">Total number of orders for the month</p>
                    <p className="text-2xl font-bold text-purple-500">567</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
