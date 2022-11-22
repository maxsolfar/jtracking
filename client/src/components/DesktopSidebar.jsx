import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import NavLinks from './NavLinks';
import {
  Flex,
  Box,
  keyframes,
  useColorMode,
  Container,
  Text,
  Button,
  Heading
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MdOutlineArrowForwardIos, MdOutlineContactSupport } from "react-icons/md";

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
      w={'250px'}
      justifyContent={'center'}
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
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}  
          py={8}
/*           shadow={"md"} */
        >
          <Flex
            as={'header'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Logo />
          </Flex>
          <NavLinks />
          <Flex>
            <Container w={'82%'} borderWidth={"1px"} textAlign="center" borderRadius={8} py={4} px={2}>
              <Heading fontSize={"sm"} mb={2} fontWeight={"semibold"}> Need Help?</Heading>
              <Text fontSize={"xs"} mb={2}>We will answer all your questions</Text>
              <Button leftIcon={<MdOutlineContactSupport/>} colorScheme={"mainBlue"} rightIcon={<MdOutlineArrowForwardIos/>} size={"sm"} variant={"outline"} fontWeight={"normal"}>Contact Us</Button>
            </Container>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default BigSideBar;
