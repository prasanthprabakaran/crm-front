import "./home.css";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
const Home = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem("authToken");
  //   window.location.reload();
  // };
  return (
    <div className="Home">
      {/* <button onClick={handleLogout}>Logout</button> */}
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
