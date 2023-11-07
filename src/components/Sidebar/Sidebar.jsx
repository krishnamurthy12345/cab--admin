import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink,Link } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={isSidebarOpen ? "sidebar bg-dark" : "sidebar bg-dark sidebar--collapsed"}>
      <div className="sidebar__top">
        <h2 className="mt-3">
          <span className=" ">
            <i className="ri-taxi-line"></i>
          </span>{" "}
          Co_Ride ak
        </h2>
      
      
        <div className='sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100'>
                <div>
                    <a href='d-flex align-items-center'>
                        <i className='bi bi-bootstrap fs-5 me-2'></i>
                        <span className='fs-4'>Sidebar</span>

                    </a> <span> <button className="sidebar__toggle" onClick={toggleSidebar}>
          <i className="ri-menu-line"></i>
        </button></span>
                    <hr className='text-secondary' />
                    <ul className='nav nav-pills flex-column p-0 m-0'>
                        <li className='nav-item p-1'>
                            <Link to='/' className='nav-link text-white'>
                                <i className='bi bi-speedometer me-2 fs-5'></i>
                                <span className='fs-5'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='nav-item p-1'>
                            <Link to='order' className='nav-link text-white'>
                                <i className='bi bi-table me-2 fs-5'></i>
                                <span className='fs-5'>Orders</span>
                            </Link>
                        </li>
                        <li className='nav-item p-1'>
                            <a href='' className='nav-link text-white'>
                                <i className='bi bi-people me-2 fs-5'></i>
                                <span className='fs-5'>Customers</span>
                            </a>
                        </li>
                        <li className='nav-item p-1'>
                            <a href='' className='nav-link text-white'>
                                <i className='bi bi-grid me-2 fs-5'></i>
                                <span className='fs-5'>Reports</span>
                            </a>
                        </li>
                        <li className='nav-item p-1'>
                            <a href='' className='nav-link text-white'>
                                <i className='bi bi-speedometer me-2 fs-5'></i>
                                <span className='fs-5'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <hr className='text-secondary' />
                    <i className='bi bi-person fs-5'></i>
                    <span className='fs-4'>Setting</span>
                </div>
            </div>

          <div className="sidebar__bottom">
            <span>
              <i className="ri-logout-circle-r-line"></i> Logout
            </span>
          </div>
        </div>
    
    </div>
  );
};

export default Sidebar;
