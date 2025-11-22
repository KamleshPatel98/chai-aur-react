import AuthUser from "../auth/AuthUser";

export default function Dashboard() {
    const { getUser } = AuthUser();   // 👈 function call
    const user = getUser();           // 👈 actual user object
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-5 hidden md:block">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <ul className="space-y-3">
                    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Profile</li>
                    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Settings</li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6">

                {/* Top Navbar */}
                <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-between">
                    <h1 className="text-xl font-semibold">Welcome to Dashboard</h1>
                    <span className="font-medium text-blue-600">
                        {user ? user.name : "User"}
                    </span>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Total Users</h3>
                        <p className="text-3xl font-bold mt-2">120</p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Sales</h3>
                        <p className="text-3xl font-bold mt-2">$3,200</p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Orders</h3>
                        <p className="text-3xl font-bold mt-2">58</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
