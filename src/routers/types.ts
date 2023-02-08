import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const RootStackParamList = {
  welcome: undefined,
  selectDistrict: undefined,
  dashboard: { district: '' },
};

export type StackNavigationProp = NativeStackNavigationProp<
  typeof RootStackParamList
>;
