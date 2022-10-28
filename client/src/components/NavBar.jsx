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
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  Input,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const NavBar = () => {
  const { user, logoutUser, toggleSidebar } = useAppContext();
  const { showSidebar } = useAppContext();
  const { colorMode } = useColorMode();
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} p={3}>
      {console.log(width)}
      <Flex
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
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <HStack>
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
          <InputGroup w={'sm'} display={['none', 'none', 'none', 'flex']} >
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="brand.clear" opacity={0.5} />}
            />
            {/* <InputLeftAddon color={"brand.clear"}  children={<BsSearch />} bg={"brand.secondary"} /> */}
            <Input focusBorderColor='brand.secondary' type="tel" placeholder="Search here..." bg={colorMode==="dark" ? "brand.primary": "brand.clear"} />
          </InputGroup>
        </HStack>

        <Box display={['flex', 'flex', 'flex', 'none']} ml={[4, 4, 4, 0]}>
          <Logo />
        </Box>

        <Flex alignItems={'center'} gap={4}>
          <Menu isLazy>
            <MenuButton>
              <Avatar
                size="md"
                rounded="full"
                src={'https://i.imgur.com/uhQVGnD.png'}
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
