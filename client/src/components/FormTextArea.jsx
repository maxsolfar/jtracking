import { Text, Textarea, Input, useColorMode } from '@chakra-ui/react';

const FormTextArea = ({ name, value, handleChange, labelText }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Text fontSize={'sm'} mb={1} opacity={0.9}>{labelText}</Text>
      <Textarea
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={`Type your ${name}`}
        size="md"
        border={'1px'}
        focusBorderColor="brand.secondary"
        borderColor={
          colorMode === 'dark'
            ? 'rgb(238, 241, 255, .1)'
            : 'rgb(26, 32, 44, .15)'
        }
        borderRadius={8}
      />
    </>
  );
};

export default FormTextArea;
