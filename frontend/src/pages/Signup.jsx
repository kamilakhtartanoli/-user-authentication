import { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router'
import { toast , ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/signup', formData);
      setMessage(res.data.message || "signup succesfull")
      navigate('/');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex bg-[#093FB4] items-center justify-center">
      <form onSubmit={handleSubmit} className=" mx-2 bg-white p-10 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
<ToastContainer />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-slate-300 focus:border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-slate-300 focus:border-yellow-500  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-slate-300  focus:border-yellow-500  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
        >
          Sign Up
        </button>
        {message && (
          <p className="text-center mt-4 text-sm text-green-700">
           {message}
          </p>
        )}
        <div className='mt-2 text-center'>
      <Link to="/login">
        <h1 className='text-slate-400'>If you have an account ? <span className='text-green-600'>Login</span>  </h1>
      </Link>
      </div>
      </form>
    </div>
  );
}