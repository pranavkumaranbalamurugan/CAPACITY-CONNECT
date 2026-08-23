import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/layout";
import Dashboard from "./views/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MainPage from "./views/login page";
import TestingPage from "./testing";
import TestCreateUser from "./testing/pages/create_user";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                 {/* Home */}
                <Route path="/" element={<MainPage />} />

                {/* Protected */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>

                {/*Testing Pages*/}
                <Route path='/testing' element={<TestingPage/>}/>
                <Route path='/testing/create user' element ={<TestCreateUser/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;