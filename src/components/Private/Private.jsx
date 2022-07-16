import React from 'react';
import {Outlet, Navigate} from "react-router-dom";

const Private = () => {
  let isAuth = true;
  return (
   <>
      {isAuth ? <Outlet /> : <Navigate to="/login"/>}
   </>
  );
}

export default Private;