import {
  Box,
  BoxShadow,
  FitBox,
  mix,
  rect,
  rrect,
  SkiaMutableValue,
  useComputedValue,
} from '@shopify/react-native-skia';
import { ReactNode } from 'react';

const src = rect(0, 0, 24, 24);
const border = rrect(src, 5, 5);
const container = rrect(rect(1, 1, 22, 22), 5, 5);

interface NeumorphismButtonProps {
  x: number;
  y: number;
  size: number;
  pressed: SkiaMutableValue<number>;
  children: ReactNode;
}

function NeumorphismButton({
  x,
  y,
  size,
  pressed,
  children,
}: NeumorphismButtonProps) {
  const c1 = useComputedValue(
    () => `rgba(255, 255, 255, ${mix(pressed.current, 0, 0.7)})`,
    [pressed],
  );
  const c2 = useComputedValue(
    () => `rgba(174, 174, 192, ${mix(pressed.current, 0, 0.5)})`,
    [pressed],
  );

  return (
    <FitBox src={src} dst={rect(x, y, size, size)}>
      <Box box={border} color="#EEEEEE">
        <BoxShadow dx={-1} dy={-1} blur={3} color="white" />
        <BoxShadow
          dx={1.5}
          dy={1.5}
          blur={3}
          color="rgba(174, 174, 192, 0.4)"
        />
      </Box>

      <Box box={container} color="#EEEEEE">
        <BoxShadow dx={-1} dy={-1} blur={1} color={c1} inner />
        <BoxShadow dx={1.5} dy={1.5} blur={1} color={c2} inner />
      </Box>

      {children}
    </FitBox>
  );
}

export default NeumorphismButton;
