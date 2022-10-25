import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';
import AddButton from './AddButton';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  subtitle: {
    fontFamily: 'Prompt-ExtraLight',
    color: '#2A4067',
    fontSize: 12,
  },
  title: {
    fontFamily: 'Prompt-SemiBold',
    color: '#2A4067',
    fontSize: 24,
  },
});

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <BackButton />
        <AddButton />
      </View>

      <Text style={styles.subtitle}>Remote settings</Text>
      <Text style={styles.title}>Living room</Text>
    </View>
  );
}

export default Header;
