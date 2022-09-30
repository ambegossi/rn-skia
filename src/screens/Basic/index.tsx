import { Canvas, Circle, Group, Oval, vec } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';

function Basic() {
  const { width, height } = useWindowDimensions();

  const center = vec(width / 2, height / 2);
  const padding = 16;
  const ovalX = padding;
  const ovalY = height / 2 - 70;
  const ovalWidth = width - padding * 2;
  const ovalHeight = 140;

  return (
    <Canvas style={{ flex: 1 }}>
      <Circle c={center} r={25} color="lightblue" />
      <Group color="lightblue" style="stroke" strokeWidth={18}>
        <Oval x={ovalX} y={ovalY} width={ovalWidth} height={ovalHeight} />
        <Group transform={[{ rotate: Math.PI / 3 }]} origin={center}>
          <Oval x={ovalX} y={ovalY} width={ovalWidth} height={ovalHeight} />
        </Group>
        <Group transform={[{ rotate: -Math.PI / 3 }]} origin={center}>
          <Oval x={ovalX} y={ovalY} width={ovalWidth} height={ovalHeight} />
        </Group>
      </Group>
    </Canvas>
  );
}

export default Basic;
