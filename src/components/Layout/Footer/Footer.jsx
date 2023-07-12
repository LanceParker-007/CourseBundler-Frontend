import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={4} bg={'blackAlpha.900'} minHeight={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['centre', 'flex-start']} width={'full'}>
          <Heading children={'All Rights Reserved'} color={'white'} />
          <Heading
            fontFamily={'body'}
            fontSize={'sm'}
            children={'@Harsh Vardhan'}
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={[2, 10]}
          justifyContent={'center'}
          color={'white'}
          fontSize={50}
        >
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
