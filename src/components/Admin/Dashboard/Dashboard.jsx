import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import { Sidebar } from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminStats } from '../../../redux/actions/adminAction';
import Loader from '../../Layout/Loader/Loader';

//Component Databox
const Databox = ({ title, qty, qtyPercentage, profit }) => {
  return (
    <Box
      w={['full', '20%']}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      p={'8'}
      borderRadius={'lg'}
    >
      <HStack spacing={'6'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
        <HStack>
          <Text children={`${qtyPercentage}%`} />
          {profit ? (
            <RiArrowUpLine color="green" />
          ) : (
            <RiArrowDownLine color="red" />
          )}
        </HStack>
      </HStack>
      <Text children={`Since last month`} opacity={0.6} />
    </Box>
  );
};

//Bar Component
const Bar = ({ title, value, profit }) => {
  return (
    <Box py={4} px={[0, 20]}>
      <Heading size={'sm'} children={title} mb={2} />
      <HStack width={'full'} alignItems={'center'}>
        <Text children={profit ? '0%' : `-${value}%`} />
        <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
        <Text children={`${value > 100 ? value : 100}%`} />
      </HStack>
    </Box>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    loading,
    stats,
    usersCount,
    subscriptionCount,
    viewsCount,
    usersPercentage,
    subscriptionPercentage,
    viewsPercentage,
    usersProfit,
    subscriptionProfit,
    viewsProfit,
  } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  return (
    <Grid
      css={{ cursor: `url(${cursor})` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {loading || !stats ? (
        <Loader color="purple.500" />
      ) : (
        <Box
          boxSizing="
        border"
          py={16}
          px={['4', '0']}
        >
          <Text
            textAlign={'center'}
            children={`Last change was on ${
              String(new Date(stats[11].createdAt)).split('G')[0]
            }`}
            opacity={0.5}
          />
          <Heading
            children={'Dashboard'}
            ml={['0', '16']}
            mb={'16'}
            textAlign={['center', 'left']}
          />
          <Stack
            direction={['column', 'row']}
            minH={24}
            justifyContent={'space-evenly'}
          >
            <Databox
              title="Views"
              qty={viewsCount}
              qtyPercentage={viewsPercentage}
              profit={viewsProfit}
            />
            <Databox
              title="Users"
              qty={usersCount}
              qtyPercentage={usersPercentage}
              profit={usersProfit}
            />
            <Databox
              title="Subscriptions"
              qty={12}
              qtyPercentage={20}
              profit={false}
            />
          </Stack>
          <Box
            m={[0, 16]}
            borderRadius={'lg'}
            padding={[0, 16]}
            mt={[4, 16]}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          >
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="Views Graph"
              pt={[8, 0]}
              ml={[0, 16]}
            />

            {/* Line Graph here */}
            <LineChart views={stats.map(item => item.views)} />
          </Box>
          <Grid templateColumns={['1fr', '2fr 1fr']}>
            <Box padding={4}>
              <Heading
                textAlign={['center', 'left']}
                size={'md'}
                children="Progress Bar"
                my={8}
                ml={[0, 16]}
              />
              <Box>
                <Bar
                  title="Views"
                  value={viewsPercentage}
                  profit={viewsProfit}
                />
                <Bar
                  title="Users"
                  value={usersPercentage}
                  profit={usersProfit}
                />
                <Bar
                  title="Subscriptions"
                  value={subscriptionPercentage}
                  profit={subscriptionProfit}
                />
              </Box>
            </Box>
            <Box padding={['0', '16']} boxSizing="border-box" py={4}>
              <Heading
                textAlign={'center'}
                size={'md'}
                mb={4}
                children={'Users'}
              />
              {/* Doughnut Graph */}
              <DoughnutChart
                users={[subscriptionCount, usersCount - subscriptionCount]}
              />
            </Box>
          </Grid>
        </Box>
      )}
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
