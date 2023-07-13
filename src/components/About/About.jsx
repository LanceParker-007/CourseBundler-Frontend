import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/introVideo.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/temsAndConditions';
const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={8}>
      <VStack>
        <Avatar boxSize={[40, 48]} />
        <Text children={'Co-Founder'} opacity={0.2} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children={'Harsh Vardhan Singh'} size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={'Hi, I am a full-stack web-developer.'}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <Box>
      <video
        autoPlay
        muted
        loop
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
  );
};

const TandC = ({ termsAndConditions }) => {
  return (
    <Box>
      <Heading
        size={'md'}
        children={'Terms and Conditions'}
        textAlign={['center', 'left']}
        my={4}
      />
      <Box h={'xs'} p={4} overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndConditions}
        </Text>
        <Heading
          my={4}
          size={'xs'}
          children={'Refund only applicable for cancellation within 7 days.'}
        />
      </Box>
    </Box>
  );
};

const About = () => {
  return (
    <Container maxWidth={'container.lg'} padding={16} boxShadow={'lg'}>
      <Heading children={'About US'} textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with premium content for premium
          users only.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout our plan.
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsAndConditions={termsAndConditions} />

      <HStack marginY={4} padding={4}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
