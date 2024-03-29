import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';
import {} from 'react-router-dom';




const Sidebar = () => {
    return (
      <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="./Post" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Items</CDBSidebarMenuItem>
                    <ul>
                        <li><input type = "checkbox"></input>Mens Clothes</li>
                        <li><input type = "checkbox"></input>Womens Clothes</li>
                        <li><input type = "checkbox"></input>Kids Clothes</li>
                        <li><input type = "checkbox"></input>Mens Shoes</li>
                        <li><input type = "checkbox"></input>Womens Shoes</li>
                        <li><input type = "checkbox"></input>Kids Shoes</li>
                        <li><input type = "checkbox"></input>Jackets and Coats</li>
                        <li><input type = "checkbox"></input>Furniture</li>
                        <li>Miscellaneous</li>
                    </ul>
              </NavLink>
              
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
             
  
              
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;
    

