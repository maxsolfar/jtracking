import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';
import { Box, Button, Flex, useColorMode } from '@chakra-ui/react';
import '../assets/css/styles.css';

const SideBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  const { colorMode } = useColorMode();
  return (
    <Box
      as={'aside'}
      className={'menuMobile'}
      display={["flex","flex","flex","none"]}
    >
      <Flex
        bg={colorMode==="dark" ? 'brand.dark' : "brand.white"}
        position={'fixed'}
        inset={'0'}
        justifyContent={'center'}
        alignItems={'center'}
        zIndex={-1}
        opacity={0}
        fontSize={'1.2rem'}
        fontWeight={'500'}
        id={showSidebar ? 'showSidebar' : ''}
      >
        <Flex
          as={'section'}
          w={'100%'}
          height={'100vh'}
          position={'relative'}
          alignItems={'center'}
          direction={'column'}
        >
          <Button
            position={'absolute'}
            top={'10px'}
            left={'10px'}
            fontSize={"lg"}
            cursor={"pointer"}
            onClick={toggleSidebar}
          >
            <FaTimes />
          </Button>
          <Flex as={'header'} justifyContent={"center"} mt={16} mb={8}>
            <Logo />
          </Flex>
          <NavLinks toggleSidebar={toggleSidebar} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideBar;
