import { TouchableWithoutFeedback, View } from 'react-native';
import { Canvas, Group, Path } from '@shopify/react-native-skia';
import { useNavigation } from '@react-navigation/native';

function BackButton() {
  const { goBack } = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={goBack}
      hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
    >
      <View>
        <Canvas style={{ width: 26, height: 13 }}>
          <Group color="#0080FF" style="fill">
            <Path path="M1 6h25v1H1z" />
            <Path path="m5.603.933.707.707L.708 7.243 0 6.535z" />
            <Path path="m6.618 11.739-.707.707L0 6.536l.706-.708z" />
          </Group>
        </Canvas>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default BackButton;
