import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profileAction';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async e => {
    e.preventDefault();
    //new FormData() tab karte jab image/video ho kuch bewakoof
    await dispatch(updateProfile(name, email));
    await dispatch(loadUser());
    navigate('/profile');
  };

  //-------- --------------In the mean time
  const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]); //Why disptach in dependencies
  //----------------------

  return (
    <Container minH={'90vh'} padding={16}>
      <form onSubmit={submitHandler}>
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
          <Button
            isLoading={loading}
            w={'full'}
            type="submit"
            colorScheme="yellow"
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
