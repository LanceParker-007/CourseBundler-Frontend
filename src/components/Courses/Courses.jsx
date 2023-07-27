import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/courseAction';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profileAction';
import { loadUser } from '../../redux/actions/userAction';
// import Loader from '../Layout/Loader/Loader';

//Course Component
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack
      className="course"
      justifyContent={['center', 'flex-start']}
      backgroundColor={'blackAlpha.200'}
      pb={4}
      borderRadius={'md'}
    >
      <Image src={imageSrc} boxSize={60} objectFit={'contain'} />
      <Heading
        children={title}
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
          variant={'outline'}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const categories = [
    'Web Dev',
    'Artificial Intelligence',
    'DSA',
    'App dev',
    'Game Dev',
  ];

  // eslint-disable-next-line no-unused-vars
  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  //------------Mean While --------
  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);

  // useEffect(() => {
  // if (error) {
  //   toast.error(error);
  //   dispatch({ type: 'clearError' });
  // }
  // if (message) {
  //   toast.success(message);
  //   dispatch({ type: 'clearMessage' });
  // }
  // }, [category, keyword, dispatch, error, message]); //Why dispatch
  //------------------------------------------

  const addToPlaylistHandler = async courseId => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  return (
    <Container minHeight={'95vh'} maxWidth={'container.lg'} paddingY={8}>
      <Heading children={'All Courses'} m={8} />
      <Input
        value={keyword}
        placeholder="Search a course..."
        onChange={e => setKeyword(e.target.value)}
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={8}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses && courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4">Will be available soon!</Heading>
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
