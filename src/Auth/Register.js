import '../index.css';
import {useFormik} from 'formik';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';
function Register() {
  const Formik = useFormik({
    initialValues: {name: '', email: '', password: '', username: ''},
    validationSchema: Yup.object({
      name: Yup.string().strict().required('Name required'),
      email: Yup.string().strict().email('Enter valid email').required('Email required'),
      password: Yup.string()
        .required('password required')
        .min(12, 'Minimum 12 character is required'),
      username: Yup.string()
        .min(10, 'Minimum 10 charaters')
        .required('username required'),
    }),
    onSubmit: (e) => {
      console.warn(e);
    },
  });
  return (
    <div className="App">
      <div className="body">
        <div className="p-10 bg-white shadow-xl login-container rounded-xl">
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
          <div className="mb-5 text-2xl font-semibold text-center">
            Create an Account
          </div>
          <form
            autoComplete="off"
            className="relative space-y-2 text-left md:w-80"
            action=""
            method="POST"
            onSubmit={Formik.handleSubmit}
          >
            <label
              htmlFor="Name"
              className="relative block text-sm font-bold text-gray-700"
            >
              Name
              <span className="absolute right-1 top-10">
                {Formik.errors.name ? null : (
                  !Formik.touched.name ? null:<FontAwesomeIcon
                  className="text-blue-500"
                  icon={faCheckCircle}
                />
                )}
              </span>
            </label>

            <input
              type="text"
              className="block w-full h-10 appearance-none rounded-xl"
              placeholder="Name"
              name="name"
              id="Name"
              onBlur={Formik.handleBlur}
              value={Formik.values.name}
              onChange={Formik.handleChange}
            />

            {Formik.errors.name && Formik.touched.name ? (
              <p className="text-xs text-red-600">{Formik.errors.name}</p>
            ) : null}
            <label
              htmlFor="Email"
              className="relative block text-sm font-bold text-gray-700"
            >
              Email
              <span className="absolute right-1 top-10">
                {Formik.errors.email ? null : (
                  !Formik.touched.email ? null:<FontAwesomeIcon
                  className="text-blue-500"
                  icon={faCheckCircle}
                />
                )}
              </span>
            </label>

            <input
              type="text"
              className="block w-full h-10 appearance-none rounded-xl"
              placeholder="Email"
              name="email"
              id="Email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.errors.email && Formik.touched.email ? (
              <p className="text-xs text-red-600 ">{Formik.errors.email}</p>
            ) : null}

            <label
              htmlFor="username"
              className="relative block text-sm font-bold text-gray-700`"
            >
              User name
              <span className="absolute right-1 top-10">
                {Formik.errors.username ? null : (
                   !Formik.touched.username ? null:<FontAwesomeIcon
                   className="text-blue-500"
                   icon={faCheckCircle}
                 />
                )}
              </span>
            </label>
            <input
              type="text"
              className="block w-full h-10 appearance-none rounded-xl"
              placeholder="username"
              name="username"
              id="username"
              value={Formik.values.username}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.errors.username && Formik.touched.username ? (
              <p className="text-xs text-red-600 ">{Formik.errors.username}</p>
            ) : null}

            <label
              htmlFor="Password"
              className="relative block text-sm font-bold text-gray-700"
            >
              Password
              <span className="absolute right-1 top-10">
                {Formik.errors.password ? null : (
                  !Formik.touched.password ? null:<FontAwesomeIcon
                  className="text-blue-500"
                  icon={faCheckCircle}
                />
                )}
              </span>
            </label>
            <input
              type="password"
              className="block w-full h-10 rounded-xl"
              placeholder="Password"
              name="password"
              id="Password"
              value={Formik.values.password}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />

            {Formik.errors.password && Formik.touched.password ? (
              <p className="text-xs text-red-600 ">{Formik.errors.password}</p>
            ) : null}
            <div className="p-2">
              <button
                className="block w-1/2 h-10 mx-auto font-bold rounded-md bg-primary"
                type="submit"
              >
                Register
              </button>
              <hr className="mt-4" style={{borderBottomWidth: '5px'}} />
              <span className="relative right-1 top-12">
                <i className="far fa-check-circle"></i>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
