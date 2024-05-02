import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const HierarchyNavigation = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const routes=useSelector((state)=>state.userDetails.routes);
  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);
  const location=useLocation();
  const navigate=useNavigate();
  return (
    <div>
      <ul
        className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 gap-0 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 space-x-0"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist"
      >
        <li className="me-2">
          <button
            id="about-tab"
            data-tabs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected="false"
            className={`inline-block p-4 ${location.pathname==="/"?"text-blue-600":"hover:text-gray-600"} rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500`}
            onClick={()=>navigate("/")}
          >
            Home
          </button>
        </li>
        <li className="me-2">
          <button
            id="services-tab"
            data-tabs-target="#services"
            type="button"
            role="tab"
            aria-controls="services"
            aria-selected="true"
            className={`inline-block p-4 ${location.pathname==="/bodyLocation"?"text-blue-600":"hover:text-gray-600"} hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 disabled:bg-gray-200`}
            disabled={routes.indexOf("bodyLocation")==-1}
            onClick={()=>navigate("/bodyLocation")}
          >
            Symptoms
          </button>
        </li>
        <li className="me-2">
          <button
            id="statistics-tab"
            data-tabs-target="#statistics"
            type="button"
            role="tab"
            aria-controls="statistics"
            aria-selected="false"
            className={`inline-block p-4 ${location.pathname==="/issues"?"text-blue-600":"hover:text-gray-600"} hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 disabled:bg-gray-200`}
            disabled={routes.indexOf("issues")==-1}
            onClick={()=>navigate("/issues")}
          >
            Issues
          </button>
        </li>
        <li className="me-2">
          <button
            id="statistics-tab"
            data-tabs-target="#statistics"
            type="button"
            role="tab"
            aria-controls="statistics"
            aria-selected="false"
            className={`inline-block p-4 ${location.pathname==="/treatement"?"text-blue-600":"hover:text-gray-600"} hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 disabled:bg-gray-200`}
            disabled={routes.indexOf("treatement")==-1}
            onClick={()=>navigate("/treatement")}
          >
            Treatement
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HierarchyNavigation;
