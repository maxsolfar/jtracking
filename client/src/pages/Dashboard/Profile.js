import {
  Button,
  Flex,
  Heading,
  Stack,
  VStack,
  Text,
  useColorMode,
  SimpleGrid,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FormRow, Alert } from '../../components';
import InputImage from '../../components/InputImage';
import { useAppContext } from '../../context/appContext';

const Profile = () => {
  const { colorMode } = useColorMode();
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);
  const [image, setImage] = useState(user?.image);
  const [phone, setPhone] = useState(user?.phone);
  const [position, setPosition] = useState(user?.position);
  const [linkedin, setLinkedin] = useState(user?.linkedin);
  const [github, setGithub] = useState(user?.github);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location || !image) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location, image, position, phone, linkedin, github });
  };

  const getUrlImage = (img) => {
    setImage(img);
  }

  return (
    <Stack
      direction={['column', 'column', 'row', 'row']}
      alignItems={['center', 'center', 'center', 'center']}
      gap={8}
    >
      {/* <VStack flexBasis={[0, 0, '220px', '220px']}>
        <InputImage img={image} onCLick={setImage} />
        <Text
          pt={4}
          fontSize={'md'}
          fontWeight={'semibold'}
          textAlign={'center'}
        >
          {name} {lastName}
        </Text>
        <Text
          fontWeight={'bold'}
          fontSize={'lg'}
          textTransform={'capitalize'}
          color={'brand.secondary'}
        >
          {location}
        </Text>
      </VStack> */}
      <Flex
        w={'100%'}
        direction={'column'}
        shadow={'md'}
        borderRadius={16}
        p={12}
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      >
        <form className="form" onSubmit={handleSubmit}>
          {showAlert && <Alert />}
          {/* name */}
          <Stack direction={["column", "column", "row", "row"]} gap={8} mb={8}>
            <VStack
              flexBasis={[0, 0, '240px', '240px']}
              justifyContent={"center"}
              p={3}
              borderRadius={8}
              borderWidth={'1px'}
              borderColor={colorMode === "dark" ? "rgba(255,255,255,.1)" : "rgba(21,21,21,.1)" }
            >
              <InputImage img={image} onCLick={getUrlImage} />
              <Text
                pt={2}
                fontSize={'md'}
                fontWeight={'semibold'}
                textAlign={'center'}
              >
                {name} {lastName}
              </Text>
              <Text
                textTransform={'capitalize'}
                opacity={.8}
              >
                {location}
              </Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w={'full'}>
              <GridItem colSpan={2}>
                <Heading fontSize={'2xl'} color={'brand.secondary'}>
                  My Profile
                </Heading>
              </GridItem>
              <GridItem colSpan={[2, 2, 2, 1]}>
                <FormRow
                  type="text"
                  name="First Name"
                  value={name}
                  handleChange={(e) => setName(e.target.value)}
                />
              </GridItem>
              <GridItem colSpan={[2, 2, 2, 1]}>
                <FormRow
                  labelText="Last Name"
                  type="text"
                  name="Last Name"
                  value={lastName}
                  handleChange={(e) => setLastName(e.target.value)}
                />
              </GridItem>
              <GridItem colSpan={[2, 2, 2, 1]}>
                <FormRow
                  type="text"
                  name="Current Position"
                  value={position}
                  handleChange={(e) => setPosition(e.target.value)}
                />
              </GridItem>
              <GridItem colSpan={[2, 2, 2, 1]}>
                <FormRow
                  type="text"
                  name="Current Location"
                  value={location}
                  handleChange={(e) => setLocation(e.target.value)}
                />
              </GridItem>
            </SimpleGrid>
          </Stack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6}>
            {/* <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                name="First Name"
                value={name}
                handleChange={(e) => setName(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                labelText="Last Name"
                type="text"
                name="Last Name"
                value={lastName}
                handleChange={(e) => setLastName(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="email"
                name="Email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                name="Current Location"
                value={location}
                handleChange={(e) => setLocation(e.target.value)}
              />
            </GridItem> */}
            <GridItem colSpan={2}>
              <Heading
                fontSize={'md'}
              >
                Contact Info
              </Heading>
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                name="Email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                name="Phone Number"
                value={phone}
                handleChange={(e) => setPhone(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                name="LinkedIn Profile"
                value={linkedin}
                handleChange={(e) => setLinkedin(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                name="Github Profile"
                value={github}
                handleChange={(e) => setGithub(e.target.value)}
              />
            </GridItem>
            <GridItem colSpan={2} justifyItems={"center"}>
              <Button
                variant={'solid'}
                className="btn btn-block"
                type="submit"
                disabled={isLoading}
                colorScheme={'mainBlue'}
                color={'brand.clear'}
                fontWeight={'medium'}
                fontSize={'md'}
              >
                {isLoading ? 'Please Wait...' : 'Save Changes'}
              </Button>
            </GridItem>
          </SimpleGrid>
        </form>
      </Flex>
    </Stack>
  );
};

export default Profile;
