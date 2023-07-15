import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <Container minH={'90vh'} padding={16}>
      <form>
        <Heading
          children={'Change Password'}
          textTransform={'uppercase'}
          my={16}
          textAlign={['center', 'left']}
        />
        <VStack spacing={8}>
          <Input
            required
            id="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Input
            required
            id="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button w={'full'} type="submit" colorScheme="yellow">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
