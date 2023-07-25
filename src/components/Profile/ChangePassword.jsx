import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profileAction';
import { toast } from 'react-hot-toast';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
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
          children={'Change Password'}
          textTransform={'uppercase'}
          my={16}
          textAlign={['center', 'left']}
        />
        <VStack spacing={8}>
          <Input
            required
            id="oldpPssword"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Input
            required
            id="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button
            w={'full'}
            isLoading={loading}
            type="submit"
            colorScheme="yellow"
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
