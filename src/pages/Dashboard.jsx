
import "../styles/dashboard.css";

import Example from "../charts/CarStatsChart";

import React, { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {

  const [totalUsers, setTotalUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    axios
      .get("http://localhost:5010/api/totalUserCount")
      .then((response) => {
        setTotalUsers(response.data.totalUsers);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("An error occurred while fetching data");
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="dashboard">
      
        <div className="row">
        <div class="col-sm-3 bg-warning bord">
    <div class="  ">
      <div class="card-body">
      <div className="user-card">
      <h3>Total User</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Total Users: {totalUsers}</p>
      )}
    </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3 bord">
    <div class="">
      <div class="card-body">
      <div className="user-count-card">
      <h3>Total User Count</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Total Users: {totalUsers}</p>
      )}
    </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3 bord">
    <div class="">
      <div class="card-body">
      <div className="user-card">
      <h3>Total User Count</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Total Users: {totalUsers}</p>
      )}
    </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3 bord">
    <div class="">
      <div class="card-body w-50">
      <div className="user-count-card">
      <h3>Total User Count</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Total Users: {totalUsers}</p>
      )}
    </div>
      </div>
    </div>
  </div>

       
          <div >
            <Example/>
          </div>

        
      
      </div>
    </div>
  );
};

export default Dashboard;
