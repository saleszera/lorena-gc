import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import {Home} from './screens'

const App = () => (
  <NavigationContainer>
    <NativeBaseProvider>
      <Home/>
    </NativeBaseProvider>
  </NavigationContainer>
)

export default App
