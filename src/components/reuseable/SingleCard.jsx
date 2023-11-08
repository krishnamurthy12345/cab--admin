import React, { useState, useEffect } from "react";
import axios from "axios";
import "../reuseable/single.css";
function UserCountCard() {
  const [totalUsers, setTotalUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API request when the component mounts
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
   <div className="container">
    <div class="row">
  
</div>
   </div>
    
      );
}

export default UserCountCard;