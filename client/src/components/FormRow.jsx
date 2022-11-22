import { FormControl, FormLabel, Input, useColorMode } from '@chakra-ui/react';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  const { colorMode } = useColorMode();
  return (
    <FormControl>
      <FormLabel htmlFor={name} fontSize={'sm'} mb={1} opacity={0.9}>
        {labelText || name}
      </FormLabel>

      <Input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={`Type your ${name}`}
        focusBorderColor="brand.secondary"
        border={'1px'}
        borderColor={
          colorMode === 'dark'
            ? 'rgb(238, 241, 255, .1)'
            : 'rgb(26, 32, 44, .15)'
        }
      />
    </FormControl>
  );
};

export default FormRow;
