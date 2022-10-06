import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNLogo from '../screens/RNLogo';
import Home from '../screens/Home';

export type AppNavigationParams = {
  Home: undefined;
  RNLogo: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationParams>();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />

      <Screen name="RNLogo" component={RNLogo} />
    </Navigator>
  );
}

export default AppNavigation;
