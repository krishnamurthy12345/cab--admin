import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import Example from "../charts/CarStatsChart";

// import LeChart from "../charts/MileChart";
// import CarStatsChart from "../charts/CarStatsChart";
// import RecommendCarCard from "../components/UI/RecommendCarCard";

// import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "Total User",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "pending update user",
  totalNumber: 97,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "new user",
  totalNumber: "20",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Active user",
  totalNumber: 633,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

       
          <div >
            <Example/>
          </div>

        
      
      </div>
    </div>
  );
};

export default Dashboard;
