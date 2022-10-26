import {
  Box,
  BoxShadow,
  Group,
  LinearGradient,
  rect,
  rrect,
  Skia,
  SkiaValue,
  translate,
  useComputedValue,
  useFont,
  vec,
  Text,
  SweepGradient,
  Path,
  Circle,
} from '@shopify/react-native-skia';

// Assets
import sfMonoSemibold from '../../../../assets/fonts/SF-Mono-Semibold.otf';

const r1 = 85;
const path = Skia.Path.Make();
path.addCircle(12 + r1, 12 + r1, r1);
const c = vec(12 + r1, 12 + r1);
const colors = ['#2FB8FF', '#9EECD9'];

const fromCircle = (cx: number, cy: number, r: number) =>
  rrect(rect(cx - r, cy - r, 2 * r, 2 * r), r, r);

interface ProgressBarProps {
  progress: SkiaValue<number>;
}

function ProgressBar({ progress }: ProgressBarProps) {
  const font = useFont(sfMonoSemibold, 32);
  const text = useComputedValue(
    () => `${Math.round(progress.current * 100)}°C`,
    [progress],
  );

  if (!font) {
    return null;
  }

  const textWidth = font.getTextWidth('00°C');

  return (
    <Group transform={translate({ x: 100, y: 223 })}>
      <Group>
        <LinearGradient
          start={vec(12, 12)}
          end={vec(200, 200)}
          colors={['#101113', '#2B2F33']}
        />
        <Box box={fromCircle(12 + 85, 12 + 85, 85)}>
          <BoxShadow dx={18} dy={18} blur={65} color="#141415" />
          <BoxShadow dx={-18} dy={-18} blur={65} color="#485057" />
        </Box>
      </Group>

      <Box box={fromCircle(37 + 60, 37 + 60, 60)} color="#32363B">
        <BoxShadow
          dx={-25}
          dy={-25}
          blur={60}
          color="rgba(59, 68, 81, 0.5)"
          inner
        />
        <BoxShadow
          dx={25}
          dy={25}
          blur={80}
          color="rgba(0, 0, 0, 0.55)"
          inner
        />
      </Box>
      <Text
        x={c.x - textWidth / 2}
        y={c.y + font.getSize() / 2}
        font={font}
        text={text}
        color="white"
      />
      <Group>
        <SweepGradient c={vec(12 + r1, 12 + r1)} colors={colors} />
        <Path
          path={path}
          style="stroke"
          strokeWidth={15}
          end={progress}
          strokeCap="round"
        />
        <Circle cx={12 + 2 * r1} cy={12 + r1} r={15 / 2} color={colors[0]} />
      </Group>
    </Group>
  );
}

export default ProgressBar;
