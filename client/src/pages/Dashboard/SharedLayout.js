import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
/* import Wrapper from '../../assets/wrappers/SharedLayout'; */
import { NavBar, MobileSidebar, DesktopSidebar } from '../../components';
import { SimpleGrid, Box, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/appContext';

const SharedLayout = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { showSidebar } = useAppContext();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  
  useEffect(()=>{
    window.addEventListener("resize", handleResize);
  },[])

  return (
    <SimpleGrid gridTemplateColumns={['1fr', '1fr', 'auto 1fr', 'auto 1fr']}>
      <MobileSidebar />
      <DesktopSidebar />
      <VStack overflowX={"hidden"}>
        <NavBar />
        <Box
          as={motion.div}
          animate={
            width > 1024
              ? {
                  width: showSidebar ? 'calc(94vw - 250px)' : '80vw',
                }
              : {
                  width: showSidebar ? '88vw' : '90vw',
                }
          }
          border={'1px solid #fff'}
        >
          <Outlet />
        </Box>
      </VStack>
    </SimpleGrid>
  );
};

export default SharedLayout;
