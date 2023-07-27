import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import { Sidebar } from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getAllCourses,
  getCourseLecture,
} from '../../../redux/actions/courseAction';
import { deleteCourse } from '../../../redux/actions/adminAction';
import { toast } from 'react-hot-toast';

const AdminCourses = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const { courses, lectures } = useSelector(state => state.course);
  console.log(lectures);

  const { loading, error, message } = useSelector(state => state.admin);

  const courseDetailsHandler = courseId => {
    dispatch(getCourseLecture(courseId));
    onOpen();
  };

  const deleteButtonHandler = courseId => {
    dispatch(deleteCourse(courseId));
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId, ',', lectureId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
    console.log('Lecture added');
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
    dispatch(getAllCourses());
  }, [dispatch, error, message]);

  return (
    <Grid
      css={{ cursor: `url(${cursor})` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box padding={[0, 8]} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children={'All Users'}
          my={16}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'Simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric> Views</Th>
                <Th isNumeric> Lectures</Th>
                <Th isNumeric> Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  loading={loading}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'courseIdFromAdminCourses'}
          courseTitle={'React Course'}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          lectures={lectures}
          loading={loading}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} alt="Poster_img" />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-start'}>
          <Button
            isLoading={loading}
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lectures
          </Button>
          <Button
            isLoading={loading}
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
