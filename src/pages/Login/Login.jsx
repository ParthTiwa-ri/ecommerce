import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./New.module.css";
import { login } from "../../services/apiLogin";
import { useDispatch, useSelector } from "react-redux";
import { successLogin } from "../../features/user/userSlice";
import toast from "react-hot-toast";

function Login() {
  // State variables
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) navigate("/", { replace: true });
  }, [isAuth, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (username && password) {
        const data = await login(username, password);
        if (data && data.token) {
          dispatch(successLogin(data));

          toast.success("Login successful.");
          navigate("/");
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <>
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit} className={styles.login}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button>Login</button>
        </form>
      </div>
      {/* <div className="wrapper">
        <div className="loginForm">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button type="submit">Submit</button>
          </form>

          <div>
            <p>
              Dont have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Login;
