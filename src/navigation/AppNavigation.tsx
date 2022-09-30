import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Basic from '../screens/Basic';
import Home from '../screens/Home';

export type AppNavigationParams = {
  Home: undefined;
  Basic: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationParams>();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />

      <Screen name="Basic" component={Basic} />
    </Navigator>
  );
}

export default AppNavigation;
