import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container height={'90vh'} padding={16}>
      <Heading children="Welcome" my={8} textAlign={'center'} />
      <VStack
        boxShadow={'2xl'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={0}
      >
        <Box
          bg={'yellow.400'}
          padding={4}
          css={{ borderRadius: '8px 8px 0 0 ' }}
        >
          <Text color={'black'} children={`Pro Pack - ₹299.00`} />
        </Box>
        <Box padding={4}>
          <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
            <Text
              children={`Join pro pack and get access to all premium content.`}
            />
            <Heading size={'md'} children={`₹299.00 only`} />
          </VStack>
          <Button my={8} width={'full'} colorScheme="yellow">
            Buy Now
          </Button>
        </Box>
        <Box bg={'blackAlpha.600'} p={4} css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'sm'}
            children="100% refund at cancellation"
          />
          <Text
            fontSize={'xs'}
            color={'white'}
            children="Terms and conditions apply."
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
