import React from 'react';
import './home.css';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import vg from '../assets/images/bg.png';
import introVideo from '../assets/videos/introVideo.mp4';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        {/*direction, jab phone hoga to column ho jayegi otherwise row */}
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']} //1cu = 4px
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={8}
          >
            <Heading
              textAlign={['center', 'left']}
              children="Learn From the experts"
              size={'2xl'}
            />
            <Text
              fontSize={'2xl'}
              fontFamily={'cursive'}
              textAlign={['center', 'left']}
              children={'Find valueabe content at resonable price'}
            />
            <Link to={'/courses'}>
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
            height={330}
            width={330}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          children={'Our Brands'}
          textAlign={'center'}
          color={'yellow.400'}
          fontFamily={'body'}
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={4}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          src={introVideo}
          // autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
