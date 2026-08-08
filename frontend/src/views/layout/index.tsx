import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            {/* Navbar */}
            {/* Sidebar */}

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;