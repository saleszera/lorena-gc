import { Spinner, View } from 'native-base';

const Loading = () => (
  <View flex={1} alignItems="center" justifyContent="center">
    <Spinner size="lg" />
  </View>
);

export default Loading;
