import '../index.css';
import {
  
  // Link,
} from 'react-router-dom';

function Login() {
  return (
    
      <div className="App">
        <div className="body">
          <div className="w-3/5 p-10 bg-white shadow-xl login-container rounded-xl md:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <div className="mb-5 text-2xl font-semibold">Login to continue</div>
            <form
              autoComplete="off"
              className="space-y-2 text-left"
              action=""
              method="POST"
            >
              <label
                htmlFor="username"
                className="block text-sm font-bold text-gray-700"
              >
                User name
              </label>
              <input
                type="text"
                className="block w-full h-10 appearance-none rounded-xl"
                placeholder="username"
                name="username"
                id="username"
              />
              <label
                htmlFor="username"
                className="block text-sm font-bold text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                className="block w-full h-10 rounded-xl"
                placeholder="Password"
                name="username"
                id="username"
              />
              <div className="p-2">
                <button
                  className="block w-1/2 h-10 mx-auto font-bold bg-yellow-500 rounded-md"
                  type="submit"
                >
                  Login
                </button>

              
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
