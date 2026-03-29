import React, { useState } from "react";
import { ProfileNavigation } from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";

const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleClose = () => setOpenSideBar(false);

  return (
    <div className="lg:flex justify-between">
      
      
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation 
          open={openSideBar} 
          handleClose={handleClose} 
        />
      </div>

      
      <div className="lg:w-[80%] ">
        <Routes>
          <Route path="/" element={<UserProfile/>} />
          <Route path="/orders" element={<UserProfile/>} />
          <Route path="/address" element={<UserProfile/>} />
        </Routes>
      </div>

    </div>
  );
};

export default Profile;