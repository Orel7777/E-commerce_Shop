import "./css/LoginSign.css";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function LoginSign() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const signUp = async () => {
    console.log("signUp function excuted", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  };

  
  const login = async () => {
    console.log("Loging function excuted", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
      
    }
  };

  return (
    <div className="loginSignup">
      <div className="loginSignUp-container">
        <h2>{state}</h2>
        <div className="loginSignUp-fields">
          {state === "Sign up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            id=""
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}
        >
          Submit
        </button>
        {state === "Sign up" ? (
          <p className="loginSignup-login">
            Existing account?
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Loing Here <FaLongArrowAltLeft />
            </span>
          </p>
        ) : (
          <p className="loginSignup-login">
            Create an account?
            <span
              onClick={() => {
                setState("Sign up");
              }}
            >
              {" "}
              Click here
              <FaLongArrowAltLeft />
            </span>
          </p>
        )}
        <div className="loginSingUp-agree">
          <input type="checkbox" name="" id="checkbox" />
          <p>i agree to terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
}
