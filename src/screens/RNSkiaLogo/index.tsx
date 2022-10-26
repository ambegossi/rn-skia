import { Dimensions } from 'react-native';
import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  mix,
  Path,
  RadialGradient,
  rect,
  Skia,
  SweepGradient,
  useComputedValue,
  useTiming,
  vec,
} from '@shopify/react-native-skia';

const { width, height } = Dimensions.get('window');
const center = vec(width / 2, height / 2);
const padding = 16;
const ovalX = padding;
const ovalY = height / 2 - 70;
const ovalWidth = width - padding * 2;
const ovalHeight = 140;

const oval = Skia.Path.Make();
oval.addOval(rect(ovalX, ovalY, ovalWidth, ovalHeight));

function RNSkiaLogo() {
  const progress = useTiming(1, { duration: 1000 });
  const transform1 = useComputedValue(
    () => [{ rotate: mix(progress.current, 0, Math.PI / 3) }, { scale: -1 }],
    [progress],
  );
  const transform2 = useComputedValue(
    () => [{ rotate: mix(progress.current, 0, -Math.PI / 3) }, { scale: -1 }],
    [progress],
  );

  return (
    <Canvas style={{ flex: 1 }}>
      <Circle c={center} r={25} color="lightblue">
        <RadialGradient
          c={vec(center.x + 25, center.y)}
          r={50}
          colors={['#3884FF', '#50D5ED']}
        />
        <BlurMask blur={5} style="solid" />
      </Circle>

      <Group style="stroke" strokeWidth={18} strokeCap="round">
        <SweepGradient c={center} colors={['#3884FF', '#50D5ED', '#3884FF']} />
        <BlurMask blur={5} style="solid" />

        <Path path={oval} end={progress} />
        <Group transform={transform1} origin={center}>
          <Path path={oval} end={progress} />
        </Group>
        <Group transform={transform2} origin={center}>
          <Path path={oval} end={progress} />
        </Group>
      </Group>
    </Canvas>
  );
}

export default RNSkiaLogo;
