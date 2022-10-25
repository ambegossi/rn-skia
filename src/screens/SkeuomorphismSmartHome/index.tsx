import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import CircularSlider from './components/CircularSlider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EDF7',
    paddingTop: 64,
  },
});

function SkeuomorphismSmartHome() {
  return (
    <View style={styles.container}>
      <Header />

      <CircularSlider />
    </View>
  );
}

export default SkeuomorphismSmartHome;
