import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/Signin"); 
  };

  return (
    <div>
      <div>
      <h3>Dashboard</h3>
        <button
          style={{ float: "right" , color:"primary"}}
          onClick={handleLogout}
        >
          {" "}
          Logout
        </button>
        <Navigation />
        <marquee><h2>WelCome to Dashboard!</h2></marquee>
      </div>
    </div>
  );
}

export default Dashboard;
// onClick={() => {handleLogout;
          //   // localStorage.clear();
          //   // window.location.reload();
          // }}