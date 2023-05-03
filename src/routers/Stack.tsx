/* eslint-disable @typescript-eslint/no-var-requires */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'native-base';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<typeof RootStackParamList>();

const StackRoutes = () => {
  const {
    colors: { light },
  } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="welcome"
        getComponent={() => require('../screens').Welcome}
      />
      <Stack.Screen
        name="selectDistrict"
        options={{
          headerShown: true,
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: light[100] },
        }}
        getComponent={() => require('../screens').SelectDistrict}
      />
      <Stack.Screen
        name="dashboard"
        options={{
          headerShown: false,
        }}
        getComponent={() => require('../screens').Dashboard}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
