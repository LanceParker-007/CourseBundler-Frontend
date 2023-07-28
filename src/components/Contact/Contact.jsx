import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/otherAction';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {
    loading,
    error,
    message: reducerMessage,
  } = useSelector(state => state.other);

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
    setMessage('');
  };

  console.log('Bahar', reducerMessage);
  useEffect(() => {
    console.log('top: ', reducerMessage);
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (reducerMessage) {
      console.log('reducerMessage: ', reducerMessage);
      toast.success(reducerMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, reducerMessage]);

  return (
    <Container height={'92vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={16}>
        <Heading children="Contact Us" />
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box marginY={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
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
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your message here..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button isLoading={loading} my={4} colorScheme="yellow" type="submit">
            Send
          </Button>

          <Box my={4}>
            Request for a courses?{' '}
            <Link to={'/request'}>
              <Button colorScheme="yellow" variant={'link'}>
                Click here
              </Button>{' '}
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
