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
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { courseRequest } from '../../redux/actions/otherAction';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const { loading, error, message } = useSelector(state => state.other);

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
    setCourse('');
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Container height={'92vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={16}>
        <Heading children="Any course you want?" />
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
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the course..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button isLoading={loading} my={4} colorScheme="yellow" type="submit">
            Send
          </Button>

          <Box my={4}>
            See available courses!{' '}
            <Link to={'/courses'}>
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

export default Request;
