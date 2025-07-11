import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/login', formData);
      setMessage(res.data.message || 'Login successful!');
      setTimeout(() => {
        navigate('/')
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex bg-[#093FB4] items-center justify-center">
      <form onSubmit={handleLogin} className="mx-2 bg-white p-10 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
        >
          Login
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-green-500">{message}</p>
        )}

        <div className="mt-4 text-center">
          <Link to="/signup" className="text-sm text-slate-500">
            Don’t have an account? <span className="text-green-600 font-semibold">Sign Up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}