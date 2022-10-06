import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  mix,
  Oval,
  RadialGradient,
  SweepGradient,
  useComputedValue,
  useTiming,
  vec,
} from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';

function RNLogo() {
  const { width, height } = useWindowDimensions();

  const progress = useTiming(1, { duration: 1000 });
  const transform1 = useComputedValue(
    () => [{ rotate: mix(progress.current, 0, Math.PI / 3) }, { scale: -1 }],
    [progress],
  );
  const transform2 = useComputedValue(
    () => [{ rotate: mix(progress.current, 0, -Math.PI / 3) }, { scale: -1 }],
    [progress],
  );

  const center = vec(width / 2, height / 2);
  const padding = 16;
  const ovalX = padding;
  const ovalY = height / 2 - 70;
  const ovalWidth = width - padding * 2;
  const ovalHeight = 140;

  return (
    <Canvas style={{ flex: 1 }}>
      <Circle c={center} r={25} color="lightblue">
        <RadialGradient
          c={vec(center.x + 25, center.y)}
          r={50}
          colors={['blue', 'red']}
        />
        <BlurMask blur={5} style="solid" />
      </Circle>

      <Group style="stroke" strokeWidth={18}>
        <SweepGradient c={center} colors={['blue', 'red', 'blue']} />
        <BlurMask blur={5} style="solid" />

        <Oval x={ovalX} y={ovalY} width={ovalWidth} height={ovalHeight} />
        <Group transform={transform1} origin={center}>
          <Oval x={ovalX} y={ovalY} width={ovalWidth} height={ovalHeight} />
        </Group>
        <Group transform={transform2} origin={center}>
          <Oval x={ovalX} y={ovalY} width={ovalWidth} height={ovalHeight} />
        </Group>
      </Group>
    </Canvas>
  );
}

export default RNLogo;
