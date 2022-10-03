import React from 'react';
import { Outlet } from "react-router-dom";
import Wrapper from '../../assets/wrappers/SharedLayout'
import { NavBar, MobileSidebar, DesktopSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <MobileSidebar />
        <DesktopSidebar />
        <section>
          <NavBar />
          <section>
            <Outlet />
          </section>
        </section>
      </main>
    </Wrapper>
  )
}

export default SharedLayout;