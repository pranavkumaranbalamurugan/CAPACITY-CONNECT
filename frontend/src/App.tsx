import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./views/login page";
import Layout from "./views/layout";
import Dashboard from "./views/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public */}
                <Route path="/login" element={<LoginPage />} />

                {/* Protected */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<Layout />}>
                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;