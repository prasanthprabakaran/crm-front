import { useState, useEffect } from "react";
import axios from "axios";
import "./Private.css";

const Private = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  
  const handleLogout = ()=> {
    localStorage.removeItem("authToken");
    window.location.reload();
  }

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "https://crm-client-prasanth.herokuapp.com/api/V2/private",
          config
        );
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>
      <div>{privateData}</div>
      <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
    </div>
  );
};

export default Private;
