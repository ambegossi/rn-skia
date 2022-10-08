import {
  add,
  BlurMask,
  Circle,
  Group,
  LinearGradient,
  vec,
  Vector,
} from '@shopify/react-native-skia';

interface BallProps {
  c: Vector;
  r: number;
}

function Ball({ c, r }: BallProps) {
  return (
    <Group transform={[{ rotate: Math.PI / 3 }]} origin={c}>
      <Circle c={c} r={r}>
        <LinearGradient
          start={add(c, vec(-r, 0))}
          end={add(c, vec(r, 0))}
          colors={['#FBE1FF', '#E1ABED']}
        />

        <BlurMask blur={5} style="solid" />
      </Circle>
    </Group>
  );
}

export default Ball;
