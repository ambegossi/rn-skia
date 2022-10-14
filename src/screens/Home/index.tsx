import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Button onPress={() => navigate('RNLogo')}>React Native Logo</Button>

      <Button onPress={() => navigate('CircleBlur')}>
        Glassmorphism - Circle Blur
      </Button>

      <Button onPress={() => navigate('Card')}>Glassmorphism - Card</Button>

      <Button onPress={() => navigate('NeumorphismButton')}>
        Neumorphism - Button
      </Button>

      <Button onPress={() => navigate('NeumorphismSwitch')}>
        Neumorphism - Switch
      </Button>

      <Button onPress={() => navigate('NeumorphismClimate')}>
        Neumorphism - Climate
      </Button>
    </View>
  );
}

export default Home;
