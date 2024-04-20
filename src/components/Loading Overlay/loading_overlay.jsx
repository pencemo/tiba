import React from "react";
import { useLoading } from "../../contexts/loading_state_context";
import "./loading_overlay.css";

const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  console.log("isLoading", isLoading);

  if (!isLoading) return null;
  else if (isLoading || isLoading == null)
    return (
      <div className="loading-overlay-screen">
        <div class="loader">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    );
};

export default LoadingOverlay;
