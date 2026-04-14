import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/userService";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const signup = async () => {
    const result = await registerUser(
      name,
      email,
      password,
      mobile
    );

    if (result.status === "success") {
      toast.success("User registered successfully");
      navigate("/login"); // ✅ redirect works now
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center animate-fade-in-up">
      <div className="card p-5 shadow-lg" style={{ width: "100%", maxWidth: 500, borderRadius: "20px", border: "none" }}>
        <h3 className="text-center mb-4 fw-bold">Student Registration</h3>

        <input
          className="form-control mb-3"
          placeholder="Full Name"
          onChange={e => setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Email address"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <input
          className="form-control mb-4"
          placeholder="Mobile Number"
          onChange={e => setMobile(e.target.value)}
        />

        <button className="btn btn-primary w-100 py-2 mb-3" onClick={signup}>
          Register Account
        </button>

        <p className="text-center mt-2 text-muted">
          Already registered? <Link to="/login" className="fw-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
