import React, { useEffect, useState } from "react";
import HierarchyNavigation from "../components/HierarchyNavigation";
import AgeGender from "../components/AgeGender";
import { Route, Routes } from "react-router-dom"
import BodyLocation from "../components/BodyLocation";
import Issues from "../components/Issues";
import Treatement from "../components/Treatement";
import { generateAuthToken } from "../Utils/GenerateToken";
const MainPage = () => {
    const [token,setToken]=useState("");
    useEffect(() => {
      // Define the URI and secret key
        const fetchData = async () => {
          try {
              // Call the authenticate function to get the token
              const authToken = await generateAuthToken();
              setToken(authToken);

          } catch (error) {
              console.error('Failed to authenticate:', error.message);
          }
      };

      fetchData();
    }, []);
  return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-300">
      <div className="w-full lg:w-[70%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-slate-50">
        <HierarchyNavigation />
        <Routes>
            <Route path="/" element={<AgeGender token={token}/>}></Route>
            <Route path="bodyLocation" element={<BodyLocation token={token}/>}></Route>
            <Route path="issues" element={<Issues token={token}/>}></Route>
            <Route path="treatement" element={<Treatement token={token}/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
