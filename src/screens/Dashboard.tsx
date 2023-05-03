import { RouteProp, useRoute } from '@react-navigation/native';
import { Box } from 'native-base';

import { Card } from '../components';
import { neighbour } from '../utils';

const Dashboard = () => {
  const { params } =
    useRoute<RouteProp<{ params: { district: string } }, 'params'>>();

  const { name, details, days } =
    neighbour.find(({ name }) => name === params.district) ?? {};

  return (
    <Box flex={1} alignItems="center" justifyContent="space-evenly" px="4">
      {[name, details].every((item) => typeof item === 'string') && (
        <Card
          district={name as string}
          details={details as string}
          daysOfWeek={days as number[]}
        />
      )}
    </Box>
  );
};

export default Dashboard;
