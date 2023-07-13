import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

const NotFound = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={4}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading my="8" textAlign={'center'} children="Page not found" />
        <Link to="/">
          <Button colorScheme="green">Go to home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
