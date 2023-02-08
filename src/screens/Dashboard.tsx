import { RouteProp, useRoute } from '@react-navigation/native';
import { Box, Text } from 'native-base';

const Dashboard = () => {
  const { params } =
    useRoute<RouteProp<{ params: { district: string } }, 'params'>>();

  return (
    <Box flex={1} alignItems="center" justifyContent="space-evenly">
      <Text fontSize="5xl" textAlign="center">
        Bairro selecionado
      </Text>
      <Text fontSize="lg">{params.district}</Text>
    </Box>
  );
};

export default Dashboard;
