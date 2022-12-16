import { Input, Image, Container } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';

const InputImage = ({ img, onCLick }) => {
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'jtracking');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dr93y7mmk/image/upload',
      data
    );
    onCLick(res.data.secure_url);
  };

  return (
    <Container
      as={'section'}
      display={'flex'}
      position={'relative'}
      justifyContent={"center"}
    >
      <Image
        w={["90px","90px","120px",'150px']}
        height={["90px","90px","120px",'150px']}
        objectFit={'cover'}
        borderRadius={'50%'}
        src={img || 'https://i.imgur.com/S8vEizB.png'}
        alt="Image Profile"
      />
      <Input
        type="file"
        name="image"
        onChange={uploadImage}
        id={'upload'}
        hidden
      />
      <label htmlFor={'upload'} className="custom-file-input">
        <FaPhotoVideo />
      </label>
    </Container>
  );
};

export default InputImage;
