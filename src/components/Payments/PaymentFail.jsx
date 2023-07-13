import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

const PaymentFail = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={4}>
        <RiErrorWarningFill size={'5rem'} color="red" />
        <Heading
          my="8"
          textAlign={'center'}
          textTransform={'uppercase'}
          children="Payment failed!"
        />
        <Link to="/subscribe">
          <Button colorScheme="yellow">Try again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
