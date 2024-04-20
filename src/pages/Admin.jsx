import React, { useContext, useEffect, useState } from "react";
import Slidebar from "../components/Admin/SlidBar/Slidebar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./Admin.css";
import Topbar from "../components/Admin/SlidBar/Topbar";
import LoadingOverlay from "../components/Loading Overlay/loading_overlay";
import { UserContext } from "../contexts/user_context";

function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userValue, updateUserValue } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAdmin(userValue.role == "admin");
    }, 100);
    console.log("use effect in admin page");
    if (location.pathname == "/admin/" || location.pathname == "/admin") {
      console.log("navigating to /admin/dashboard because path is /admin");
      navigate("/admin/dashboard");
    }
  }, [0]);

  return (
    <div className="flex ">
      <Slidebar isAdmin={isAdmin} />
      <Outlet />
      <Topbar />
      <LoadingOverlay />
    </div>
  );
}

export default Admin;
