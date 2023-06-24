// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from './Button';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Perform form validation
//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }

//     const obj = {
//       email,
//       password
//     };

//     try {
//       const response = await fetch('http://localhost:5038/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(obj)
//       });
//       if (!response.ok) {
       
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       console.log(data.token);
//       localStorage.setItem('token', JSON.stringify(data.token));
//       console.log('Login successful');
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//       setError('An error occurred during login');
//     }

//     // Clear form fields
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="flex justify-center pt-28">
//       <form onSubmit={handleSubmit} className="max-w-sm w-full">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="flex items-center justify-between">
//           <Button type="submit">Sign In</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const obj = {
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:8080/user/login', obj);
        console.log(response)
      const { data } = response;
      console.log(data.token);
      localStorage.setItem('token', JSON.stringify(data.token));
      console.log('Login successful');
      setTimeout(() => {
        navigate('/softskills');
        window.location.reload(false);
      }, 1000);
    } catch (err) {
      console.log(err.response.data.msg);
      setError(err.response.data.msg);
    }

    // Clear form fields
    setEmail('');
    setPassword('');
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

