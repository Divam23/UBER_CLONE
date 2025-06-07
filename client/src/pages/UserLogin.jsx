import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    const newUserData = {
      email: email,
      password: password,
    };
    setUserData(newUserData);
    console.log("User Data:", newUserData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <form action="" onSubmit={submitHandler}>
          <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            className="bg-[#111] text-white font-semibold mb-4 rounded-md px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Submit
          </button>
          <p className="text-center">
            New Here?&nbsp;
            <Link to="/user-signup" className="text-blue-500">
              Create new account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to="/captain-login" className="bg-[#10b461] flex justify-center items-center text-white font-semibold mb-4 rounded-md px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
