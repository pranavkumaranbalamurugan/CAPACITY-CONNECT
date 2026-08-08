import { useNavigate } from "react-router-dom"
import logo from "../../assets/Workspere Logo v5.png";
import CheckInTimer from "./components/check-in-timer";

function Dashboard(){
    const navigate=useNavigate();


    return(
        <>
            <div>
                <img src={logo} alt="WorkSphere Logo" style={{ width: "400px", height: "auto" }}></img>
            </div>
            <div>
                <CheckInTimer/>
            </div>
            <div>
                <h1>login successfull and this is the dashboard</h1>
                <button onClick={() => navigate("/login")} className="btn btn-primary" >Press me to go back to login page</button>
            </div>
        </>
    )
}

export default Dashboard