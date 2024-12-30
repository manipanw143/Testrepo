// index.js or main entry file
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import { name as EasyAPp} from '../app.json';

// Wrap the App in NavigationContainer here (only once)
const AppWithNavigation = () => (
  <NavigationContainer>
    <App/>
  </NavigationContainer>
);

AppRegistry.registerComponent(EasyAPp, () => AppWithNavigation);
