import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={16}>
        <Heading children={'Welcome to CourseBundler'} />
        <form style={{ width: '100%' }}>
          <Box marginY={4}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={4}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password..."
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={4}>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password
              </Button>
            </Link>
          </Box>
          <Button my={4} colorScheme="yellow" type="submit">
            Login
          </Button>
          <Box my={4}>
            New User?{' '}
            <Link to={'/register'}>
              <Button colorScheme="yellow" variant={'link'}>
                Sign up
              </Button>{' '}
            </Link>
            :
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
