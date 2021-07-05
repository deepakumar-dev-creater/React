import '../index.css';
import // Link,
'react-router-dom';

function Login() {
  return (
    <div className="App">
      <div className="body">
        <div className="w-3/5 p-10 bg-white shadow-xl login-container rounded-xl md:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mb-2"
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
            method=""
          >
            <label
              htmlFor="username"
              className="block text-sm font-bold text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              className="block w-full h-10 appearance-none rounded-xl focus:outline-none focus:border-transparent focus:ring-primary"
              placeholder="Username"
              name="username"
              id="username"
            />
            <label
              htmlFor="Password"
              className="block text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="text"
              className="block w-full h-10 appearance-none rounded-xl focus:ring-primary focus:outline-none focus:border-transparent"
              placeholder="Password"
              name="password"
              id="Password"
            />
            <div className="p-2">
              <button
                className="block w-1/2 h-10 mx-auto font-bold rounded-md bg-primary"
                type="submit"
                onSubmit={onchange()}
              >
                Login
              </button>
            </div>
          </form>
          <hr className="mt-4" style={{borderBottomWidth: '5px'}} />
        </div>
      </div>
    </div>
  );
}

export default Login;
