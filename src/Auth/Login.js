import '../index.css';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';


import // Link,
'react-router-dom';

function Login() {
  const formik = useFormik({
      initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().min(15, 'Maximum 15 fileds').required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <div className="body Login">
        <div className="p-10 bg-white shadow-xl login-container rounded-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <div className="mb-5 text-2xl font-semibold">Login to continue</div>
          <form
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            className="space-y-2 text-left md:w-80"
            action=""
            method="POST"
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
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.errors.username ? (
              <div>
                {<p className="text-red-600">{formik.errors.username}</p>}
              </div>
            ) : null}
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
              onChange={formik.handleChange}
              values={formik.values.password}
            />
            <div className="p-2">
              <button
                className="block w-1/2 h-10 mx-auto font-bold rounded-md bg-primary"
                type="submit"
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
