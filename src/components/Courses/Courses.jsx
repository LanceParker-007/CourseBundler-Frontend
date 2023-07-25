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
}) => {
  return (
    <VStack className="course" justifyContent={['center', 'flex-start']}>
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
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const categories = [
    'Web Dev',
    'Artificial Intelligence',
    'DSA',
    'App dev',
    'Game Dev',
  ];

  const { loading, courses, error } = useSelector(state => state.course);

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
  }, [category, keyword, dispatch, courses, error]); //Why dispatch

  const addToPlaylistHandler = courseId => {
    console.log('Added to playlist', courseId);
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
        {courses.length > 0 ? (
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
