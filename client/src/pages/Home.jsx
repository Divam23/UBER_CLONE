import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <div className='w-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col'>
        <img className='w-18 ml-8 invert' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className="text-3xl font-bold">Get Started with Uber</h2>
            <Link to="/user-login" className="w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5">Continue</Link>
        </div>
    </div>
  )
}

export default Home