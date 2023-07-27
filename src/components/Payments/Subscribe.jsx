import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../redux/store';
import { buySubscription } from '../../redux/actions/userAction';
import { toast } from 'react-hot-toast';
import logo from '../../assets/images/bg.png';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');

  const { loading, subscriptionId, error } = useSelector(
    state => state.subscription
  );
  const { error: courseError } = useSelector(state => state.course);

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);
    setKey(data.key);
    dispatch(buySubscription());
    // //
    // Ye buySubscription funtion dispatch/call hote hi mujhe backend se subscriptionId mil jayegi
    // jise menee ek reducer(buySubscriptionSuccess) ki madad se subscriptionId naam ke var mein store
    // kara liya hai, ab us subscriptionId ko idhar mein useSelector ki help se access kar lunga
    // //
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'Course Bundler',
          description: 'Get access to all premium content',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'India',
          },
          theme: {
            color: '#FFC800',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    user.name,
    user.email,
    key,
    subscriptionId,
    courseError,
  ]);

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
          <Button
            onClick={subscribeHandler}
            my={8}
            width={'full'}
            colorScheme="yellow"
            isLoading={loading}
          >
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
