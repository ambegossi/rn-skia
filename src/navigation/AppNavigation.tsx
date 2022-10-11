import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNLogo from '../screens/RNLogo';
import Home from '../screens/Home';
import CircleBlur from '../screens/CircleBlur';
import Card from '../screens/Card';
import NeumorphismRNButton from '../screens/NeumorphismRNButton';

export type AppNavigationParams = {
  Home: undefined;
  RNLogo: undefined;
  CircleBlur: undefined;
  Card: undefined;
  NeumorphismRNButton: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationParams>();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />

      <Screen name="RNLogo" component={RNLogo} />

      <Screen name="CircleBlur" component={CircleBlur} />

      <Screen name="Card" component={Card} />

      <Screen
        name="NeumorphismRNButton"
        component={NeumorphismRNButton}
        options={{
          headerShown: true,
        }}
      />
    </Navigator>
  );
}

export default AppNavigation;
