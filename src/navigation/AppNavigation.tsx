import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNLogo from '../screens/RNLogo';
import Home from '../screens/Home';
import CircleBlur from '../screens/CircleBlur';
import Card from '../screens/Card';
import NeumorphismButton from '../screens/NeumorphismButton';
import NeumorphismSwitch from '../screens/NeumorphismSwitch';
import NeumorphismClimate from '../screens/NeumorphismClimate';

export type AppNavigationParams = {
  Home: undefined;
  RNLogo: undefined;
  CircleBlur: undefined;
  Card: undefined;
  NeumorphismButton: undefined;
  NeumorphismSwitch: undefined;
  NeumorphismClimate: undefined;
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
        name="NeumorphismButton"
        component={NeumorphismButton}
        options={{
          headerShown: true,
        }}
      />

      <Screen
        name="NeumorphismSwitch"
        component={NeumorphismSwitch}
        options={{
          headerShown: true,
        }}
      />

      <Screen
        name="NeumorphismClimate"
        component={NeumorphismClimate}
        options={{
          headerShown: true,
        }}
      />
    </Navigator>
  );
}

export default AppNavigation;
