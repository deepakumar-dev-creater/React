import "../index.css";
import { Link } from "react-router-dom";
function SideBar() {
  if (
    window.location.pathname === "/Login" ||
    window.location.pathname === "/Register" ||
    window.location.pathname === "/" ||
    window.location.pathname === "/404"
  )
    return null;
  return (
    <div className="">
      <div id='Sidebar' className="flex-col flex-1 hidden w-24 h-screen p-2 space-y-10 text-center transition duration-75 ease-in bg-blue-600 md:w-80 md:hidden Sidebar">
        <div>Logo</div>
        <div className="relative hover:shadow-xl">
          <div className="absolute top-6 left-4">Home</div>
          <Link to="/Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 m-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute top-6 left-4">Profile</div>
          <Link to="/Profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute top-6 left-4">Leave</div>

          <Link to="/About">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-6">Documents</div>

          <Link to="/About">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex-col hidden h-screen p-2 space-y-8 text-center transition duration-75 ease-out bg-blue-600 md:w-52 sm:hidden md:flex">
        <div>Logo</div>
        <div className="flex p-2 rounded-md hover:bg-blue-700">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          <Link to="/Home" className="text-base ">
            Home
          </Link>
        </div>
        <div className="flex p-2 rounded-md hover:bg-blue-700">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          <Link to="/Profile" className="text-base ">
            Profile
          </Link>
        </div>
        <div className="flex p-2 rounded-md hover:bg-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <Link to="/About" className="text-base ">
            Leave
          </Link>
        </div>
        <div className="flex p-2 rounded-md hover:bg-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>{" "}
          <Link to="/About" className="text-base ">
            Documents
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
