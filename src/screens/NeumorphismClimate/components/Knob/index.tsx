import {
  Group,
  LinearGradient,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';

function Knob() {
  return (
    <Group>
      <Group>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(27.5, 17)}
          colors={['#2E3236', '#141515']}
        />

        <RoundedRect x={0} y={0} width={27.5} height={17} r={6} />
      </Group>
    </Group>
  );
}

export default Knob;
