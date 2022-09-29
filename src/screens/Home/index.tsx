import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import Button from '../../components/Button';

function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Button onPress={() => navigate('Basic')}>Basic</Button>
    </View>
  );
}

export default Home;
