import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationParams } from '../../navigation/AppNavigation';

interface Screen {
  title: string;
  screenName: keyof AppNavigationParams;
}

const screens: Screen[] = [
  {
    title: '⚛️ React Native Skia Logo',
    screenName: 'RNSkiaLogo',
  },
  {
    title: '🪞 Glassmorphism - Circle Blur',
    screenName: 'CircleBlur',
  },
  {
    title: '🪞 Glassmorphism - Superbank Card',
    screenName: 'SuperbankCard',
  },
  {
    title: '🪞 Glassmorphism - Premium Card',
    screenName: 'PremiumCard',
  },
  {
    title: '📈 Charts - Wallet',
    screenName: 'Wallet',
  },
  {
    title: '⚪️ Neumorphism - Button',
    screenName: 'NeumorphismButton',
  },
  {
    title: '⚪️ Neumorphism - Switch',
    screenName: 'NeumorphismSwitch',
  },
  {
    title: '⚪️ Neumorphism - Climate',
    screenName: 'NeumorphismClimate',
  },
];

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 64,
  },
  item: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#bdbdbd',
  },
});

function Home() {
  const { navigate } = useNavigation();

  const renderItem: ListRenderItem<Screen> = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigate(item.screenName)}
      style={styles.item}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={screens}
        renderItem={renderItem}
        keyExtractor={item => item.screenName}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default Home;
