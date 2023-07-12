import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();

  console.log(params.token);

  return (
    <Container padding={16} height={'90vh'}>
      <form>
        <Heading
          children={'Reset Password'}
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={8}>
          <Input
            required
            id="email"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button type="submit" width={'full'} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
