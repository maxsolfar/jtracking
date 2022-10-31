import { useColorMode } from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import logoLight from "../assets/images/logo-light.svg";
import { Image } from "@chakra-ui/react";
const Logo = () => {
  const {colorMode} = useColorMode();
  return (
      colorMode === "dark" ? <Image w={"60%"} src={logoLight} alt="jobs-logo" className="logo-light" /> : <Image w={"60%"} src={logo} alt="jobs-logo" className="logo" /> 
  )
}

export default Logo;
