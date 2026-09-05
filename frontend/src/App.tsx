import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/layout";
import TraineeDashboard from "./views/dashboard/trainee dashboard/index";
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
                <Route path="/traineedashboard" element={<TraineeDashboard />} />

                {/* Protected */}
                {/* <Route element={<ProtectedRoute />}>
                    <Route element={<Layout />}>
                        <Route path="/traineedashboard" element={<TraineeDashboard />} />
                    </Route>
                </Route> */}

                {/*Testing Pages*/}
                <Route path='/testing' element={<TestingPage/>}/>
                <Route path='/testing/create user' element ={<TestCreateUser/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;