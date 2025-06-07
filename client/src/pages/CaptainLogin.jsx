import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    const newcaptainData = {
      email: email,
      password: password,
    };
    setcaptainData(newcaptainData);
    console.log("User Data:", newcaptainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-15 mb-5"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
            Want to be part of something exciting?&nbsp;
            <Link to="/captain-signup" className="text-blue-500">
              Join as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-[#e8c114] flex justify-center items-center text-white font-semibold mb-4 rounded-md px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
