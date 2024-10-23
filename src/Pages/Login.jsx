import React from 'react'

function Login() {
  return (
    <div className='flex items-center'>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Login</h2>
      
      <form className="space-y-6">
    
        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            required
          />
        </div>
    
        <div>
          <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label for="remember" className="block ml-2 text-sm text-gray-900">Remember me</label>
          </div>
          <div>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-800">Forgot password?</a>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-purple-500 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </div>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        Don't have an account? 
        <a href="#" className="font-medium text-gray-400 hover:text-gray-800">Sign up</a>
      </p>
    </div>
  </div>
  )
}

export default Login
