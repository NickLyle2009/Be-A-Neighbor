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




const Sidebar=()=>{
    return (
        <div style={{display:'flex', height:'100%', overflow:'auto'}}>
            <CDBSidebar textColer="#fff" backgroundColor="rgb(37, 90, 122)">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    {/* <Link to="/Profile">Profile</Link> */}
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                             <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{textAlign:'center'}}>
                    <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                        sidebar footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default Sidebar;