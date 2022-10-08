import { useMemo } from 'react';
import {
  add,
  BackdropFilter,
  Canvas,
  Circle,
  DisplacementMap,
  Fill,
  LinearGradient,
  mix,
  Offset,
  sub,
  Turbulence,
  useComputedValue,
  useLoop,
  vec,
} from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';

const padding = 32;

function CircleBlur() {
  const { width, height } = useWindowDimensions();

  const c = vec(width / 2, height / 2);
  const r = c.x - padding;
  const rect = useMemo(
    () => ({ x: 0, y: c.y, width, height: c.y }),
    [c.y, width],
  );

  const progress = useLoop({ duration: 2000 });
  const start = useComputedValue(
    () => sub(c, vec(0, mix(progress.current, r, r / 2))),
    [],
  );
  const end = useComputedValue(
    () => add(c, vec(0, mix(progress.current, r, r / 2))),
    [],
  );
  const radius = useComputedValue(
    () => mix(progress.current, r, r / 2),
    [progress],
  );

  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="black" />

      <Circle c={c} r={radius}>
        <LinearGradient
          start={start}
          end={end}
          colors={['#FFF723', '#E70696']}
        />
      </Circle>

      <BackdropFilter
        clip={rect}
        filter={
          <Offset x={-5} y={0}>
            <DisplacementMap channelX="a" channelY="r" scale={50}>
              <Turbulence freqX={0.01} freqY={0.05} octaves={4} />
            </DisplacementMap>
          </Offset>
        }
      />
    </Canvas>
  );
}

export default CircleBlur;
