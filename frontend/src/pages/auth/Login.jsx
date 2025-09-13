import React, { useState, useContext } from "react";
import Authlayout from "../../components/layouts/Authlayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { ValidateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axioInstance";
import { API_PATHS } from "../../utils/apipaths.js";
import { UserContext } from "../../context/userContext.jsx";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!ValidateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter th password ");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        toast.success("Logged In Successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. PLease try again. ");
      }
    }
  };
  
  return (
    <Authlayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">welcome back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          please enter your details in login
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="email"
            placeholder="example@gmail.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{""}
            <Link className="font-medium text-primary underline" to="/Signup">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </Authlayout>
  );
};

export default Login;
