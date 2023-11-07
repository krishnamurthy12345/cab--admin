import React from "react";
import "../styles/dashboard.css";
import LeChart from "../charts/MileChart";
const UserData = () => {
    return (
      <div className="dashboard">
        <div className="div1">
          <LeChart/>
          </div>
      </div>
    );
  };
  
  export default UserData;