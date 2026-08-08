import { useState } from 'react'
import { api } from '../../api/apiInstance';
import { AUTH_API } from "../../api/api_functions/auth";
import type { LoginResponse } from "../../models/auth";
import logo from "../../assets/Workspere Logo v5.png";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    

    try {
      setError("");

      const formData = new URLSearchParams();

      formData.append("username", email);
      formData.append("password", password);

      console.log("Before request");

      const response = await api.post<LoginResponse>(
        AUTH_API.LOGIN,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("After request");
      console.log("Status:", response.status);
      console.log("Data:", response.data);

      localStorage.setItem(
        "access_token",
        response.data.access_token
      );

      navigate("/dashboard");
      
      console.log("Token saved");
    } catch (error) {
      console.error("FULL ERROR:", error);
      setError("Login failed");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 " >
      <div className="border rounded p-4 shadow bg-light" style={{ width: "400px" }}>
        <form onSubmit={handleLogin} >
          <div className='text-center'>
            <img src={logo} alt="WorkSphere Logo" style={{ width: "250px", height: "auto" }}></img>
            <br></br>
            <h4>Login</h4>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className='form-control'
              type="email"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className='form-control'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
          </div>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage