import "../index.css";
function Header(props) {
  if (
    window.location.pathname === "/Login" ||
    window.location.pathname === "/Register" ||
    window.location.pathname === "/"
  )
    return null;
  const ToggleSidebar = () => {
    let Sidebar = document.querySelector(".Sidebar");
 !Sidebar.classList.contains('hidden')? Sidebar.className+=' hidden':Sidebar.classList.remove('hidden')
//  ='hidden' ? Sidebar.className+=' hidden':Sidebar.classList.remove('hidden')
  };
  return (
    <div className="flex flex-col w-screen">
      <div className="flex h-12 bg-gray-200 border-2 shadow-md">
        <button onClick={ToggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 m-1 md:hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {props.children}
    </div>
  );
}
export default Header;
