import { useState } from 'react'
import { api } from '../../api/apiInstance';
import { AUTH_API } from "../../api/api_functions/auth";
import type { LoginResponse } from "../../models/auth";
import logo from "../../assets/Workspere Logo v5.png";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");

      const response = await api.post<LoginResponse>(
        AUTH_API.LOGIN,
        {
          username: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response.data);

      localStorage.setItem(
        "access_token",
        response.data.access_token
      );

    } catch (error) {
      console.error(error);
      setError("Invalid email or password");
    }
  };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 " >
            <div className="border rounded p-4 shadow bg-light" style={{ width: "400px" }} >
                <div className='text-center'>
                    <img src={logo} alt="WorkSphere Logo" style={{ width: "250px", height: "auto" }}></img>
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
                <button onClick={handleLogin} className='btn btn-primary'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default LoginPage