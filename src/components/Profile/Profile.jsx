import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';
import { useState } from 'react';

const Profile = ({ user }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const removeFromPlaylistHandler = _id => {
    console.log('Removed ', _id);
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log('Photo Changed');
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={8}>
      <Heading children={'Profile'} m={8} textTransform={'uppercase'} />
      <Stack
        direction={['column', 'row']}
        justifyContent={['flex-start']}
        alignItems={'center'}
        spacing={['8', '16']}
        p={8}
      >
        <VStack>
          <Avatar src={user.avatar.url} boxSize={'48'} />
          <Button colorScheme="yellow" variant={'ghost'} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={4} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="CreeatedAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription && user.subscription.status === 'active' ? (
                <Button color={'yellow.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button> Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button> Update Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} my={8} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          padding={4}
        >
          {user.playlist.map(element => (
            <VStack w={48} m={2} key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

//Change_Avatar/Photo_Box
function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const changeImage = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePreview('');
    setImage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={8}>
                {imagePreview && <Avatar src={imagePreview} boxSize={48} />}
                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />
                <Button
                  onClick={closeHandler}
                  type="submit"
                  width={'full'}
                  colorScheme="yellow"
                >
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button m={3} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
