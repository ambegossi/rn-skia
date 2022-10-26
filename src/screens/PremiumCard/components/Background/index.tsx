import { Group, Circle, RadialGradient, vec } from '@shopify/react-native-skia';

function Background() {
  return (
    <Group>
      <Circle c={vec(100, 155)} r={30} color="#E70B0B" />

      <Circle c={vec(325, 285)} r={100}>
        <RadialGradient
          c={vec(250, 345)}
          r={200}
          colors={['#FFA800', '#FF0000']}
        />
      </Circle>

      <Circle c={vec(90, 480)} r={70} color="#FFA800" />
    </Group>
  );
}

export default Background;
