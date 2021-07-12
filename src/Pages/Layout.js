import "../index.css";
import Header from "../Includes/Header";
import Footer from "../Includes/Footer";
import SideBar from "../Includes/Sidebar";
const Layout = (props) => {
  return (
    <div className="">
      <div className="relative flex w-full">
        <SideBar />
        <Header {...props} />
      </div>

      <Footer />
    </div>
  );
};
export default Layout;
