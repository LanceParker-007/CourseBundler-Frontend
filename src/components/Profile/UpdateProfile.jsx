import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <Container minH={'90vh'} padding={16}>
      <form>
        <Heading
          children={'Update Profile'}
          textTransform={'uppercase'}
          my={16}
          textAlign={['center', 'left']}
        />
        <VStack spacing={8}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            type="text"
            focusBorderColor="yellow.500"
          />
          <Input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button w={'full'} type="submit" colorScheme="yellow">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
