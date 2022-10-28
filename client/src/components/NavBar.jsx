/* import Wraper from '../assets/wrappers/NavBar'; */
import { FaAlignLeft } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import {
  Flex,
  Text,
  Link,
  Avatar,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const { user, logoutUser, toggleSidebar } = useAppContext();
  const { showSidebar } = useAppContext();
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  
  useEffect(()=>{
    window.addEventListener("resize", handleResize);
  },[])

  return (
    <Flex
      w={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      shadow={'sm'}
      p={3}
    >
      {console.log(width)}
      <Flex
        as={motion.div}
        animate={
          width > 1024 ? {
            width: showSidebar ? 'calc(94vw - 250px)' : '80vw',
          }
          : {
            width: showSidebar ? "88vw" : "90vw",
          }
        }
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Button
          variant={'outline'}
          fontSize={'2xl'}
          color={'brand.secondary'}
          cursor={'pointer'}
          display={'flex'}
          alignItems={'center'}
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </Button>

        <Box ml={[4,4,4,0]}>
          <Box display={["flex","flex", "flex", "none"]}><Logo /></Box>
          <Heading size={"md"} className="logo-text" display={["none","none", "none", "block"]}>Dashboard</Heading>
        </Box>
        <Flex alignItems={'center'} gap={4}>
          <Menu isLazy>
            <MenuButton>
              <Avatar
                size="md"
                rounded="full"
                border={'1px solid rgba(255,255,255,.5)'}
                src={'https://avatars2.githubusercontent.com/u/37842853?v=3'}
              />
            </MenuButton>
            <MenuList zIndex={5}>
              <Link
                href="https://dev.to/m_ahmad"
                _hover={{ textDecoration: 'none' }}
                isExternal
              >
                <MenuItem>
                  <VStack justify="start" alignItems="left">
                    <Text fontWeight="500">{user?.name}</Text>
                    <Text size="sm" color="gray.500" mt="0 !important">
                      @{user?.name}
                    </Text>
                  </VStack>
                </MenuItem>
              </Link>
              <MenuItem onClick={logoutUser}>
                <Text fontWeight="500">Sign Out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
