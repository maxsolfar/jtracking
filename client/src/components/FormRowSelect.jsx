import { Select, FormLabel, FormControl, useColorMode } from "@chakra-ui/react";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  const { colorMode } = useColorMode();
  return (
    <FormControl>
      <FormLabel htmlFor={name}>
        {labelText || name}
      </FormLabel>

      <Select
        name={name}
        value={value}
        onChange={handleChange}
        variant='outline'
        colorScheme={"mainBlue"}
        focusBorderColor="brand.secondary"
        border={'1px'}
        borderColor={
          colorMode === 'dark'
            ? 'rgb(238, 241, 255, .1)'
            : 'rgb(26, 32, 44, .15)'
        }
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FormRowSelect;
