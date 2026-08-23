import Logo from '../../assets/Workspere Logo v5.png'
import LoginContainer from "./components/login-container";

function MainPage(){

    return(
        <div style={{backgroundColor:'#FBEFEF', minHeight: '100vh'   }}>
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
                    <img src={Logo} alt="WorkSphere Logo" style={{ width: "250px", height: "auto" }}></img>
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
                <div className="px-4 py-3">
                    <h1 className='font-display-lg text-display-lg text-on-primary mb-unit-md leading-tight' >Elevate your workforce today.</h1>
                    <p className='font-body-lg text-body-lg text-primary-fixed-dim opacity-90'>Seamlessly manage HR, payroll and team productivity in one unified, sophisticated platform.</p>
                </div>
                <div style={{  marginRight: "300px", marginTop: "150px" }}>
                    <LoginContainer/>
                </div>
            </div>
        </div>
    )

}

export default MainPage