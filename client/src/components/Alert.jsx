import { Box } from '@chakra-ui/react';
import { useAppContext } from '../context/appContext';

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <Box
      w={'100%'}
      bg={alertType === 'danger' ? 'brand.danger' : 'brand.success'}
      color={"brand.clear"}
      py={1}
      px={3}
      borderRadius={6}
      textAlign={'center'}
      fontSize={'xs'}
    >
      {alertText}
    </Box>
  );
};

export default Alert;
