import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'} p={16}>
      <Heading
        my="8"
        textAlign={'center'}
        children="Now, you have a Pro pack."
      />
      <VStack
        boxShadow={'lg'}
        pb={16}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          width={'full'}
          bg={'yellow.400'}
          padding={4}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'} children="Payment Successful" />
        </Box>
        <Box padding={4}>
          <VStack textAlign={'center'} px={8} mt={4} spacing={'8'}>
            <Text>
              Congratulations, you're a pro member now. You have access to
              premium content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button variant={'ghost'}>Go to profile</Button>
        </Link>

        <Heading size={'xs'}> Reference: ref_id_from_backend</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
