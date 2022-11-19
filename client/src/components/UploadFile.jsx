import {
  AspectRatio,
  Box,
  Container,
  forwardRef,
  Image,
  Heading,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

const uploadImage = async (e) => {
  const files = e.target.files;
  const data = new FormData();
  data.append('file', files[0]);
  data.append('upload_preset', 'jtracking');
  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dr93y7mmk/image/upload",
    data
  );
  console.log(res.data.secure_url);
};

/* const first = {
  rest: {
    rotate: "-15deg",
    scale: 0.95,
    x: "-50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    x: "-70%",
    scale: 1.1,
    rotate: "-20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const second = {
  rest: {
    rotate: "15deg",
    scale: 0.95,
    x: "50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    x: "70%",
    scale: 1.1,
    rotate: "20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const third = {
  rest: {
    scale: 1.1,
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    scale: 1.3,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};
 */
/* const PreviewImage = forwardRef((props, ref) => {
  return (
    <Box
      bg="white"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      as={motion.div}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
});
 */
const UploadFile = () => {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();
  return (
    <Container my="12" flexBasis={"30%"}>
      <AspectRatio width="100%" ratio={1}>
        <Box
          borderColor="brand.clear"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: 'md',
          }}
          as={motion.div}
          initial="rest"
          animate="rest"
          whileHover="hover"

        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Box height="28" width="28" position="relative" >
{/*                   <PreviewImage
                    variants={first}
                    backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
                  />
                  <PreviewImage
                    variants={second}
                    backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
                  />
                  <PreviewImage
                    variants={third}
                    backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
                  /> */}
                 <Image w={"100%"} h={"100%"} objectFit={"cover"} borderRadius={"50%"} src={"https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80"} />
                </Box>
                <Stack p="2" textAlign="center" spacing="1">
                  <Heading fontSize="lg" color="brand.secondary" fontWeight="bold">
                    Drop images here
                  </Heading>
                  <Text fontWeight="light">or click to upload</Text>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="image/*"
              onDragEnter={startAnimation}
              onDragLeave={stopAnimation}
              onChange={uploadImage}
            />
          </Box>
        </Box>
      </AspectRatio>
    </Container>
  );
};

export default UploadFile;
