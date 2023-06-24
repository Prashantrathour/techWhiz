import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import Button from './Button';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setsuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !password) {
      setError('Please enter all fields');
      return;
    }

    const obj = {
      name,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:8080/user/register', obj);

      const { data } = response;
      console.log(data);
      console.log('Registration successful');
      setsuccess(true)
      setError(data.msg||'Registration successful');
      setTimeout(() => {
        navigate("/login");
        
      }, 1000);
    } catch (err) {
      console.log(err.response.data.msg);
      setError(err.response.data.msg||'An error occurred during registration');
      setsuccess(false)
    }

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');
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
            type="text"
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
        {error && <p className={!success?"text-red-500 mb-4":"text-green-500 mb-4"}>{error}</p>}
        <div className="flex items-center justify-between">
          <Button type="submit">Sign Up</Button>
          <Link to='/login' className='text-red-500 '>Already a member please Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
