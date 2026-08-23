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

    <div >
      <div>
        <div>
          <h3>Welcome back</h3>
          <p>Please enter your details to sign-in<br /></p>
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