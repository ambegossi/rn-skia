import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

// Fonts
import promptExtraLight from './src/assets/fonts/Prompt-ExtraLight.ttf';
import promptSemiBold from './src/assets/fonts/Prompt-SemiBold.ttf';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Prompt-ExtraLight': promptExtraLight,
    'Prompt-SemiBold': promptSemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigation />
    </NavigationContainer>
  );
}
