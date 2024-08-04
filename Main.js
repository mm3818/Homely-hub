import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
const Main = () => {
  return (
    <div>
      {/* rendering the header , footer and outlet components */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
