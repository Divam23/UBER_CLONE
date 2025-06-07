import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName) {
      alert("Please fill in all fields");
      return;
    }
    const newUserData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };
    setUserData(newUserData);
    console.log("User Data:", newUserData);

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <h3 className="text-lg mb-2 font-medium">What's your name?</h3>
          <div className='flex w-full gap-4 mb-5'>
            <input
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="additional-name"
          />
            <input
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="additional-name"
          />
          </div>
          <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            className="bg-[#111] text-white font-semibold mb-2 rounded-md px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Submit
          </button>
          <p className="text-center">
            Already have an account?&nbsp;
            <Link to="/user-login" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[12px] text-justify leading-tight'>By proceeding you consent to get calls, WhatsApp, or SMS messages, including by automated means, from Uber and its affiliates to the number provided</p>
      </div>
    </div>
  );
}

export default UserSignup