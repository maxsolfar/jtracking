import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} fontSize={'sm'} mb={1} opacity={.9}>
        {labelText || name}
      </FormLabel>

      <Input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={`type your ${name}`}
      />
    </FormControl>
  );
};

export default FormRow;
