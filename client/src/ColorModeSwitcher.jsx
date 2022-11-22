import * as React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Switch,
  Box,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');

  return (
    <Box as={motion.div} display={"flex"} alignItems={"center"}>
      <Switch aria-label={`Switch to ${text} mode`} isChecked={colorMode==="dark"? true : false} colorScheme={"mainBlue"} size="lg" onChange={toggleColorMode} position="relative">
        {colorMode==="dark" ?
          <Box zIndex={2} position={"absolute"} top={"6px"} right={["6px","6px", "13.5px", "13.5px"]}><FaSun color={"#3F62FE"} opacity={.8}/></Box>
        :
          <Box zIndex={2} position={"absolute"} top={"6px"} left={["6px","6px", "6px", "6px"]}><FaMoon color={"#2D3250"} opacity={.8}/></Box>
        } 
      </Switch>
    </Box>
  );
};
