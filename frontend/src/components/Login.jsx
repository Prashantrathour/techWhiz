import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the data to an API or perform any other actions
    const obj={
      email,
      password
    }
    fetch("http://localhost:5038/user/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        // "authorization":JSON.parse(localStorage.getItem("token"))
      },
      body:JSON.stringify(obj)

    })
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.token)
      localStorage.setItem("token",JSON.stringify(data.token))
      console.log("login succ");
      alert("Login Successful")
      navigate("/")
    }).catch((err)=>{
      console.log(err)
    })
    // Handle form submission he
    setEmail("")
    setPassword("")
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center pt-28">
      <form onSubmit={handleSubmit} className="max-w-sm w-full">
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
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
