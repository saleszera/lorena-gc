import {registerRootComponent} from 'expo'
import App from './src'
import { theme } from './src/config';

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

registerRootComponent(App)