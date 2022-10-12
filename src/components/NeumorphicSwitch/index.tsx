import {
  Box,
  BoxShadow,
  Circle,
  FitBox,
  Group,
  mix,
  rect,
  rrect,
  SkiaMutableValue,
  useComputedValue,
} from '@shopify/react-native-skia';

const src = rect(0, 0, 48, 24);
const border = rrect(src, 12, 12);
const container = rrect(rect(1, 1, 46, 22), 12, 12);
const dot = rrect(rect(6, 6, 12, 12), 12, 12);

interface NeumorphicSwitchProps {
  x: number;
  y: number;
  size: number;
  pressed: SkiaMutableValue<number>;
}

function NeumorphicSwitch({ x, y, size, pressed }: NeumorphicSwitchProps) {
  const transform = useComputedValue(
    () => [{ translateX: mix(pressed.current, 0, 24) }],
    [pressed],
  );

  const r = useComputedValue(() => mix(pressed.current, 0, 2), [pressed]);

  return (
    <FitBox src={src} dst={rect(x, y, size, size)}>
      <Box box={border} color="#F0F0F3">
        <BoxShadow dx={-1} dy={-1} blur={3} color="white" />
        <BoxShadow
          dx={1.5}
          dy={1.5}
          blur={3}
          color="rgba(174, 174, 192, 0.4)"
        />
      </Box>

      <Box box={container} color="#EEEEEE">
        <BoxShadow
          dx={-1}
          dy={-1}
          blur={1}
          color="rgba(255, 255, 255, 0.7)"
          inner
        />
        <BoxShadow
          dx={1.5}
          dy={1.5}
          blur={1}
          color="rgba(255, 255, 255, 0.2)"
          inner
        />
      </Box>

      <Group transform={transform}>
        <Box box={dot} color="#F0F0F3">
          <BoxShadow dx={-1} dy={-1} blur={3} color="white" />
          <BoxShadow
            dx={1.5}
            dy={1.5}
            blur={3}
            color="rgba(174, 174, 192, 0.4)"
          />
        </Box>
        <Circle cx={12} cy={12} r={r} color="#745FF2" opacity={pressed} />
      </Group>
    </FitBox>
  );
}

export default NeumorphicSwitch;
