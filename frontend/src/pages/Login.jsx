import React from 'react';

function Login() {

    
  return (
    <div className="h-screen m-20 p-10">
      <form className="flex px-8 py-2  items-start gap-4 shadow-sm flex-col w-96">
        <h1 className="p-2 text-center">Login</h1>
        <label htmlFor="email">Email</label>
        <input className="h-10 border border-red-500 w-64 p-2" type="email" />
        <label htmlFor="password">Password</label>
        <input
          className="h-10 border border-red-500 w-64 p-2"
          type="password"
        />
        <button type="submit" className="bg-red-500 text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
