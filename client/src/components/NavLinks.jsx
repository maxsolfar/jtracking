import { Flex, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import '../assets/css/styles.css';
import { motion } from 'framer-motion';


const NavLinks = ({ toggleSidebar }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction={'column'}
      w={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      className={'nav-links'}
    >
      {links.map((link, index) => {
        const { text, path, id, icon } = link;
        return (
          <Flex
            key={index}
            as={motion.div}
            alignItems={'center'}
            textTransform={'capitalize'}
            justifyContent={'center'}
/*             _hover={
              colorMode === 'dark'
                ? { background: 'brand.dark' }
                : { background: 'brand.white' }
            } */
            w={'100%'}
          >
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                colorMode === 'dark'
                  ? isActive 
                    ? 'nav-link active'
                    : 'nav-link'
                  : isActive
                  ? 'nav-link activeLight'
                  : 'nav-link'
              }
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default NavLinks;
