import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { FormRow, Alert } from '../components';
import logo from '../assets/images/logo.svg';
import logoLight from '../assets/images/logo-light.svg';
import bg from '../assets/images/bg.jpg';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { motion } from 'framer-motion';
import {
  Stack,
  Container,
  useColorMode,
  Image,
  Button,
  Box,
  VStack,
  keyframes,
} from '@chakra-ui/react';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  isMember: true,
};

const Auth = () => {
  const { colorMode } = useColorMode();
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const animationBounceKeyframes = keyframes`
    0% { transform: scale(.95);}
    50% { transform: scale(.98);}
    100% { transform: scale(.95); }
  `;
  const bounceAnimation = `${animationBounceKeyframes} 2s ease-in-out infinite`;

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, isMember } = values;
    if (
      !email ||
      !password ||
      (!isMember && !name) ||
      (!isMember && !confirmPassword)
    ) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password, confirmPassword };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard/');
      }, 2500);
    }
  }, [user, navigate]);

  return (
    <Stack
      as={'section'}
      alignItems={'center'}
      justify={'center'}
      w={'100%'}
      h={'100%'}
      minH={'100vh'}
      bg={colorMode === 'dark' ? 'brand.dark' : 'brand.clear'}
    >
      <Container
        maxW={'container.lg'}
        display={'flex'}
        flexDirection={['column', 'column', 'row', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
        w={'90%'}
        minH={'700px'}
        h={'100%'}
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.white'}
        borderRadius={30}
        shadow={'xl'}
        p={0}
        overflow={'hidden'}
        position={'relative'}
      >
        <Box
          position={'absolute'}
          top={5}
          left={5}
        >
          <ColorModeSwitcher origin={"auth"} />
        </Box>

        <Box
          position={'absolute'}
          transform={'rotate(-90deg)'}
          zIndex={1}
          h={'auto'}
          w={'700px'}
          ml={'70px'}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill={colorMode === 'dark' ? '#2D3250' : '#ffffff'}
            ></path>
          </svg>
        </Box>
        <Stack
          w={'100%'}
          h={'100%'}
          minH={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          p={8}
          flexBasis={['100%', '100%', '50%', '50%']}
        >
          <VStack as={'form'} onSubmit={onSubmit} gap={2} zIndex={2}>
            <Image
              w={'50%'}
              src={colorMode === 'dark' ? logoLight : logo}
              alt="jobs-logo"
              mb={4}
            />
            <div>
              <h3>{values.isMember ? 'Sign In' : 'Register'}</h3>
            </div>
            {showAlert && <Alert />}
            {/* name field */}
            {!values.isMember && (
              <FormRow
                type="text"
                name="name"
                value={values.name}
                handleChange={handleChange}
                labelText="Name"
              />
            )}
            {/* email field */}
            <FormRow
              type="text"
              name="email"
              value={values.email}
              handleChange={handleChange}
              labelText="Email"
            />
            {/* password field */}
            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
              labelText="Password"
            />
            {/* confirm-password field */}
            {!values.isMember && (
              <FormRow
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                handleChange={handleChange}
                labelText="Confirm Password"
              />
            )}
            <Button
              type="submit"
              disabled={isLoading}
              size={'md'}
              w={'100%'}
              colorScheme={'mainBlue'}
              color={'brand.clear'}
              fontWeight={'normal'}
            >
              {values.isMember ? 'Login' : 'Sign Up'}
            </Button>
            <p>
              {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
              <Button
                mt={8}
                ml={1}
                type="button"
                onClick={toggleMember}
                variant={'link'}
                color={'brand.secondary'}
                fontWeight={'normal'}
                fontSize={'lg'}
              >
                {values.isMember ? 'Register' : 'Login'}
              </Button>
            </p>
          </VStack>
        </Stack>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          flexBasis={'50%'}
          w={'100%'}
          h={'100%'}
          minH={'700px'}
          opacity={0.8}
        >
          <Image
            position={'absolute'}
            h={'100%'}
            objectFit={'cover'}
            src={bg}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Auth;
