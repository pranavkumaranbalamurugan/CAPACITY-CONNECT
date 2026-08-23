import { useState } from "react"
import { useLoader } from "../../utilities/useLoader";
import { testCreateUser } from "../../api/api_functions/test";

function TestCreateUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const { withLoader, isLoading } = useLoader();
    const [error, setError] = useState("");

    const roles = [
        { value: "SUPER ADMIN", label: "Super Admin" },
        { value: "ADMIN", label: "Admin" },
        { value: "HR", label: "HR" },
        { value: "MANAGER", label: "Manager" },
        { value: "EMPLOYEE", label: "Employee" },
    ];

    const handleTestCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            "work_email": email,
            "password": password,
            "role": role,
            "company_id": 1
        }
        withLoader(
            "testcreatuser",
            () => testCreateUser(payload),
            {
                successMessage: "User Created Successfully",
                errorMessage: "Can't create user",

                onSuccess: () => {
                },

                onError: () => {
                    setError("Can't create user");
                },
            }
        )();
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }} >
            <form className="border rounded p-4 shadow bg-light" style={{ width: "400px", backgroundColor: '#FFE2E2' }} onSubmit={handleTestCreateUser}>
                <h1>Create User</h1>
                <div>
                    <label className="form-label" >User Email</label>
                    <input
                        className='form-control'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="form-label" >User Password</label>
                    <input
                        className='form-control'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label className="form-label">Role</label>
                    <select
                        className="form-select"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">Select a role</option>
                        {roles.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
                <div className="items-center flex">
                    <button
                        type='submit'
                        className='btn btn-primary'
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating...." : "Create"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TestCreateUser