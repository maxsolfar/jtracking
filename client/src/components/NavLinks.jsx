import { Flex, useColorMode } from "@chakra-ui/react";
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

    >
      {links.map((link, index) => {
        const { text, path, id, icon } = link;
        return (
          <Flex
            key={index}
            as={motion.div}
            alignItems={'center'}
/*             py={4} */
            textTransform={'capitalize'}
            justifyContent={'center'}
            _hover={colorMode === "dark" ? { background:"brand.dark" } : { background:"brand.white" }}
            w={"100%"}
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                colorMode === "dark" ? isActive ? 'nav-link active' : 'nav-link' : isActive ? 'nav-link activeLight' : 'nav-link'
              }
              key={id}
              onClick={toggleSidebar}
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
