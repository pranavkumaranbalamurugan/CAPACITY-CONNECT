import { useState } from 'react'
import { login } from "../../../api/api_functions/auth";
import { useNavigate } from 'react-router-dom';
import { useLoader } from "../../../utilities/useLoader";

function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { withLoader, isLoading } = useLoader();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    withLoader(
      "login",
      () => login(email, password),
      {
        successMessage: "Login successful",
        errorMessage: "Invalid email or password",

        onSuccess: () => {
          navigate("/dashboard");
        },

        onError: () => {
          setError("Login failed");
        },
      }
    )();
  };

  return (

    <div className="border rounded p-4 shadow bg-light" style={{ width: "400px" }}>
      <div>
        <div className='text-center'>
          <h2>Capacity Connect</h2>
          <p>Welcome back. Please log in to your account.<br /></p>
        </div>
        <form className='py-4' onSubmit={handleLogin}>
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
            <span className='d-flex justify-content-between align-items-center'>
            <label className="form-label">Password</label>
            <p><a href='#' className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Forgot password?</a></p>
            </span>
            <input
              className='form-control'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
          </div>
          <div className='mb-3"'>
            <label>
              <input
                type='checkbox'
                className='btn btn-primary'
                placeholder=''
              />
              {" "}Remember me
            </label>
          </div>
          <div className='d-grid gap-2"'>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={isLoading}
            >
              {isLoading ? "Signing in...." : "Sign-in"}
            </button>
          </div>
          
        </form>
      </div>
    </div>

  )
}

export default LoginContainer