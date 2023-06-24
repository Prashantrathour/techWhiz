import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Signup = () => {
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
        name,
        email,
        password
    }
    fetch("http://localhost:5038/user/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)

    })
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
      console.log("reg succ");
      alert("Sign Up Successful")
      navigate("/login")
    }).catch((err)=>{
      console.log(err)
    })
    // Handle form submission here
    // You can send the data to an API or perform any other actions
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center pt-28">
      <form onSubmit={handleSubmit} className="max-w-sm w-full">
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
