import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const logout = () => { localStorage.removeItem('token'); navigate('/login'); };
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Lost & Find Buddy</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <button onClick={logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}