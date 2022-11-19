import { Box, Alert, AlertIcon } from '@chakra-ui/react';
import { useAppContext } from '../context/appContext';

const AlertComponent = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <Box w={'100%'}>
      {console.log(alertText)}
      <Alert my={4} mb={4} borderRadius={8} status={alertType === 'danger' ? 'error' : 'success'}>
        <AlertIcon />
        {alertText}
      </Alert>
    </Box>
  );
};

export default AlertComponent;
