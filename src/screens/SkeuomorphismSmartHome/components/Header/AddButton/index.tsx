import { TouchableWithoutFeedback, View } from 'react-native';
import { Canvas, Group, Path } from '@shopify/react-native-skia';

function AddButton() {
  return (
    <TouchableWithoutFeedback
      hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
    >
      <View>
        <Canvas style={{ width: 20, height: 21 }}>
          <Group color="#0080FF" style="fill">
            <Path path="M0 10h20v1H0z" />
            <Path path="M10.5.5v20h-1V.5z" />
          </Group>
        </Canvas>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddButton;
