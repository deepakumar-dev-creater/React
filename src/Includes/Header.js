import "../index.css";
function Header(props) {
 
  const ToggleSidebar = () => {
    let Sidebar = document.querySelector(".Sidebar");
    !Sidebar.classList.contains("hidden")
      ? (Sidebar.className += " hidden")
      : Sidebar.classList.remove("hidden");
  };
  return (
    <div className="flex flex-col w-screen">
      <div className="flex items-center justify-center h-12">
        <button onClick={ToggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 m-2 md:hidden"
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
        <div className="w-full font-mono text-2xl font-semibold text-center md:text-left md:m-3">
          {props.Name[0].name}
        </div>
        <div className="mx-2 my-1 ml-auto h-9 w-9">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Profil_Avatar_S.jpg/982px-Profil_Avatar_S.jpg"
            alt="profile"
          />
        </div>
      </div>

      {props[0].children}
    </div>
  );
}
export default Header;
