import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNSkiaLogo from '../screens/RNSkiaLogo';
import Home from '../screens/Home';
import CircleBlur from '../screens/CircleBlur';
import SuperbankCard from '../screens/SuperbankCard';
import PremiumCard from '../screens/PremiumCard';
import Wallet from '../screens/Wallet';
import NeumorphismButton from '../screens/NeumorphismButton';
import NeumorphismSwitch from '../screens/NeumorphismSwitch';
import NeumorphismClimate from '../screens/NeumorphismClimate';

export type AppNavigationParams = {
  Home: undefined;
  RNSkiaLogo: undefined;
  CircleBlur: undefined;
  SuperbankCard: undefined;
  PremiumCard: undefined;
  Wallet: undefined;
  NeumorphismButton: undefined;
  NeumorphismSwitch: undefined;
  NeumorphismClimate: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationParams>();

function AppNavigation() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Screen name="RNSkiaLogo" component={RNSkiaLogo} />

      <Screen name="CircleBlur" component={CircleBlur} />

      <Screen name="SuperbankCard" component={SuperbankCard} />

      <Screen name="PremiumCard" component={PremiumCard} />

      <Screen
        name="Wallet"
        component={Wallet}
        options={{ headerShown: false }}
      />

      <Screen name="NeumorphismButton" component={NeumorphismButton} />

      <Screen name="NeumorphismSwitch" component={NeumorphismSwitch} />

      <Screen name="NeumorphismClimate" component={NeumorphismClimate} />
    </Navigator>
  );
}

export default AppNavigation;
