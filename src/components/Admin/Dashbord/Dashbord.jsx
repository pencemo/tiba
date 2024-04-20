import React, { useContext, useEffect, useState } from "react";
import "./Dashbord.css";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/user_context";
import { UserModel } from "../../../models/user_model";
import { AuthService } from "../../../firebase/auth_services/auth_service";
import { UserDBServices } from "../../../firebase/database_services/user_db";
import { useLoading } from "../../../contexts/loading_state_context";

function Dashbord() {
  const authInstance = new AuthService();
  const userDBInstance = new UserDBServices();

  const navigate = useNavigate();
  const location = useLocation();
  const { userValue, updateUserValue } = useContext(UserContext);
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      authInstance.isAuthenticated().then(async (isAuthenticated) => {
        if (isAuthenticated) {
          const email = authInstance.getCurrentUserEmail();
          const userModel = await userDBInstance.getUser(email);

          if (userModel != null) {
            updateUserValue(
              new UserModel(
                userModel.email,
                userModel.password,
                userModel.name,
                userModel.role
              )
            );
          }

          navigate(location.pathname);
        } else {
          updateUserValue(null);
          navigate("/login");
        }
        setLoading(false);
      });
    }, 1000);
  }, [1]);

  return (
    <div className="min-width flex items-center justify-center  bg-slate-200">
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashbord;
