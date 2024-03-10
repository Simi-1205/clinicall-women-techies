import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const withTokenVerification = (Component) => {
  const WrapperComponent = () => {
    const navigate = useNavigate();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const verifyToken = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          // Token not present, redirect to login page
          console.log("Token not present");
          navigate("/");
          return;
        }

        try {
          console.log(localStorage.getItem("token"));
          const response = await fetch("http://localhost:5002/verify-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({ token }),
          });
          if (response.ok) {
            // Token is valid
            console.log("Response.ok");
            setVerified(true);
          } else {
            // Token is invalid or expired, redirect to login page
            console.log("Token is invalid or expired");
            navigate("/");
          }
        } catch (error) {
          console.error("Error verifying token:", error);
          // Error occurred, redirect to login page
          console.log("Error occured, redirect to login page");
          navigate("/");
        }
        setVerified(true);
      };

      verifyToken();
    }, [navigate]);

    console.log(verified);
    return verified ? <Component /> : <h1>LOGIN ERROR</h1>;
  };

  return WrapperComponent;
};
export default withTokenVerification;
