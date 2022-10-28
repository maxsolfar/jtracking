import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import NavLinks from './NavLinks';
import {
  Flex,
  Box,
  keyframes,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationSidebar = keyframes`
  0% { margin-left: -250px;}
  100% { margin-left: 0px; }
`;
const animationShow = `${animationSidebar} 1s ease-in-out`;

const animationSidebarHide = keyframes`
  0% { margin-left: 0px;}
  100% { margin-left: -250px; }
`;
const animationHide = `${animationSidebarHide} 1s ease-in-out`;

const BigSideBar = () => {
  const { showSidebar } = useAppContext();
  const { colorMode } = useColorMode();
  return (
    <Box
      as={motion.div}
      display={['none', 'none', 'none', 'flex']}
      animation={showSidebar ? animationShow : animationHide}
      ml={showSidebar ? 0 : '-250px'}
      p={4}
      w={"250px"}
      justifyContent={"center"}
    >
      <Flex
        h={'100%'}
        minH={'95vh'}
        w={'100%'}
        fontSize={'1.2rem'}
        fontWeight={500}
        justifyContent={'center'}
      >
        <Box
          position={'sticky'}
          top={0}
          bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
          borderRadius={12}
        >
          <Flex
            as={'header'}
            h={'9rem'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Logo />
          </Flex>
          <NavLinks />
        </Box>
      </Flex>
    </Box>
  );
};

export default BigSideBar;
