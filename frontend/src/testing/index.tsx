import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function TestingPage(){
    const dev_secret=import.meta.env.DEV_SECRET
    const[secret,setSecret]=useState("")
    const [error, setError] = useState("");

    const navigate=useNavigate();
    
    const VerifySecret = () => {
    if (secret === dev_secret) {
      navigate("/testing/create user");
    } else {
      setError("Invalid admin secret");
    }
  };

    return(
        <>
            <h3>Enter the dev secret</h3>
            <input 
                type="password" 
                value={secret} 
                placeholder="Admin Secret" 
                onChange={(e) => setSecret(e.target.value)} 
            />
            <button onClick={VerifySecret}>Submit</button>
             {error && ( <p className="text-red-500">{error} </p>)}
        </>
    );
}

export default TestingPage;