import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import introVideo from '../../assets/videos/introVideo.mp4';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLecture } from '../../redux/actions/courseAction';
import Loader from '../Layout/Loader/Loader';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, lectures } = useSelector(state => state.course);
  // console.log(lectures);

  // const lectures = [
  //   {
  //     _id: 'jfjhjf',
  //     title: 'sample 1',
  //     description: 'Sample Description',
  //     video: {
  //       url: 'fdfwf',
  //     },
  //   },
  // ];

  useEffect(() => {
    dispatch(getCourseLecture(params.id));
  }, [dispatch, params.id]);

  if (
    //Protecting subscribers content, we ar laoding the lectures but if user is not eligible to access them we redirec them t  /subscribe page
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    // toast.error('Only Subsribed users can access this!');
    return <Navigate to={'/subscribe'} />;
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          m={4}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={4} children={'Description'} />
        <Text m={4} children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
