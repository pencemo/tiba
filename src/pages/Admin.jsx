import React, { useContext, useEffect } from "react";
import Slidebar from "../components/Admin/SlidBar/Slidebar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./Admin.css";
import Topbar from "../components/Admin/SlidBar/Topbar";
import LoadingOverlay from "../components/Loading Overlay/loading_overlay";

function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log("use effect in admin page");
    if (location.pathname == "/admin/" || location.pathname == "/admin") {
      console.log("navigating to /admin/dashboard because path is /admin");
      navigate("/admin/dashboard");
    }
  }, [0]);

  return (
    <div className="flex ">
      <Slidebar />
      <Outlet />
      <Topbar />
      <LoadingOverlay />
    </div>
  );
}

export default Admin;
