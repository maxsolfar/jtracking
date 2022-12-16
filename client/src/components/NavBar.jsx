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
  HStack,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useEffect, useState } from 'react';
import Clock from './Clock';

const NavBar = () => {
  const { user, logoutUser, toggleSidebar } = useAppContext();
  const { showSidebar } = useAppContext();
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} p={3}>
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
          {/*  <InputGroup w={'sm'} display={['none', 'none', 'none', 'flex']} >
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="brand.clear" opacity={0.5} />}
            />
            <Input focusBorderColor='brand.secondary' type="tel" placeholder="Search here..." bg={colorMode==="dark" ? "brand.primary": "brand.clear"} />
          </InputGroup> */}
          <Heading
            as={"h2"}
            display={['none', 'none', 'none', 'flex']}
            pl={3}
            fontSize={'lg'}
            lineHeight={'1rem'}
            gap={2}
            alignItems={'center'}
          >
            Welcome to
            <Text
              color="brand.clear"
              bg={'brand.secondary'}
              py={2}
              px={3}
              borderRadius={6}
              fontSize={'xl'}
            >
              Tracking Board
            </Text>
          </Heading>
        </HStack>

        <Box display={['flex', 'flex', 'flex', 'none']} ml={[4, 4, 4, 0]}>
          <Logo />
        </Box>

        <Flex alignItems={'center'} gap={4}>
          <Box display={['none', 'none', 'flex', 'flex']}>
            <Clock />
          </Box>
          <Menu isLazy>
            <MenuButton>
              <Avatar
                size="md"
                rounded="full"
                borderColor={'brand.secondary'}
                borderWidth={'2px'}
                src={user.image}
                shadow={'md'}
              />
            </MenuButton>
            <MenuList zIndex={5}>
              <Link
                href={user.linkedin}
                _hover={{ textDecoration: 'none' }}
                isExternal
              >
                <MenuItem>
                  <VStack justify="start" alignItems="left">
                    <Text fontWeight="500">
                      {user?.name} {user?.lastName}
                    </Text>
                    <Text size="sm" color="gray.500" mt="0 !important">
                      @{user?.name.toLowerCase()}
                      {user?._id.slice(0, 3)}
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
