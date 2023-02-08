import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import Routes from './routers/Stack';

const App = () => (
  <NavigationContainer>
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  </NavigationContainer>
);

export default App;
