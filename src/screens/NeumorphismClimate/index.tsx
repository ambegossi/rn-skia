/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import {
  Blur,
  Canvas,
  Circle,
  Fill,
  Group,
  LinearGradient,
  mix,
  runSpring,
  useComputedValue,
  useFont,
  useLoop,
  useTouchHandler,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import Control from './components/Control';
import Title from './components/Title';
import Snow from './components/icons/Snow';
import Mode from './components/Mode';
import ProgressBar from './components/ProgressBar';

function NeumorphismClimate() {
  const { width, height } = useWindowDimensions();
  const font = useFont(
    require('../../assets/fonts/SF-Pro-Display-Bold.otf'),
    17,
  );

  const translateY = useValue(0);
  const offsetY = useValue(0);
  const t = useLoop({ duration: 3000 });
  const x = useComputedValue(() => mix(t.current, 0, 180), [t]);
  const progress = useComputedValue(() => x.current / 192, [x]);

  const onTouch = useTouchHandler({
    onStart: pt => {
      offsetY.current = translateY.current - pt.y;
    },
    onActive: pt => {
      translateY.current = offsetY.current + pt.y;
    },
    onEnd: () => {
      runSpring(translateY, 0);
    },
  });

  if (!font) {
    return null;
  }

  return (
    <Canvas style={{ flex: 1 }} onTouch={onTouch}>
      <Group>
        <Group>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height)}
            colors={['#2A2D32', '#212326', '#131313']}
          />
          <Fill />
        </Group>
        <Group>
          <Blur blur={30} />
          <Circle
            color="#56CCF2"
            opacity={0.2}
            cx={width}
            cy={height}
            r={150}
          />
        </Group>

        <Title title="Climate" />

        <ProgressBar progress={progress} />

        <Control
          x={0}
          y={464}
          label="Ac"
          active
          progress={progress}
          font={font}
        >
          <Snow />
        </Control>

        <Mode translateY={translateY} />
      </Group>
    </Canvas>
  );
}

export default NeumorphismClimate;
