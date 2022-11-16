import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Search } from '../components/Search';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
