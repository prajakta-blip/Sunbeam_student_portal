import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/auth/signin", {
        email,
        password,
      });

      if (res.data.status === "success") {
  const { token, user } = res.data.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  toast.success("Login successful");

  // ✅ CLEAN REDIRECT
  if (user.role === "ADMIN") {
    navigate("/admin", { replace: true });
  } else {
    navigate("/", { replace: true });
  }
}
 else {
        toast.error(res.data.error);
      }
    } catch (err) {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center animate-fade-in-up">
      <div className="card p-5 shadow-lg" style={{ width: "100%", maxWidth: 420, borderRadius: "20px", border: "none" }}>
        <h3 className="text-center mb-4 fw-bold">Login</h3>
        
        <input
          className="form-control mb-3"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        
        <button className="btn btn-primary w-100 py-2 mb-3" onClick={login}>
          Login
        </button>
        
        <p className="text-center mt-2 text-muted">
          Not registered yet? <Link to="/register" className="fw-bold">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
