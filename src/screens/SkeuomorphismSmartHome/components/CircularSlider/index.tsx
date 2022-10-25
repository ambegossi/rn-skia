import { useWindowDimensions } from 'react-native';
import {
  Canvas,
  Circle,
  Group,
  Path,
  Shadow,
  Skia,
  vec,
  SweepGradient,
  useTouchHandler,
  useValue,
  Text,
  useFont,
  useComputedValue,
} from '@shopify/react-native-skia';

// Assets
import promptSemiBold from '../../../../assets/fonts/Prompt-SemiBold.ttf';

const CANVAS_HEIGHT = 370;

function CircularSlider() {
  const { width } = useWindowDimensions();
  const percent = useValue(0);
  const temperatureFont = useFont(promptSemiBold, 20);
  const celsiusFont = useFont(promptSemiBold, 15);

  const temperature = useComputedValue(() => {
    const minTemp = 18;

    const newTemp = (percent.current * 100) / 8.3 + minTemp;

    return Math.round(newTemp).toString();
  }, [percent]);

  const path = Skia.Path.Make();
  path.addCircle(width / 2, CANVAS_HEIGHT / 2, 102);

  const onTouch = useTouchHandler({
    onActive: ({ x, y }) => {
      const centerX = width / 2;
      const centerY = CANVAS_HEIGHT / 2;
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

      if (distance > 75 && distance < 129) {
        const mouseRelY = (y - centerY) * -1;
        const mouseRelX = x - centerX;
        let theta = Math.atan(mouseRelY / mouseRelX);

        if (mouseRelX < 0 && mouseRelY > 0) {
          theta += Math.PI;
        } else if (mouseRelX < 0 && mouseRelY <= 0) {
          theta += Math.PI;
        } else if (mouseRelX > 0 && mouseRelY <= 0) {
          theta += 2 * Math.PI;
        }

        let newPercent = 100 - (100 * theta) / (2 * Math.PI) + 25;

        if (newPercent > 100) newPercent -= 100;

        if (newPercent >= 25) {
          newPercent -= 25;
        } else {
          newPercent += 75;
        }

        percent.current = newPercent / 100;
      }
    },
  });

  if (!temperatureFont || !celsiusFont) {
    return null;
  }

  const temperatureTextWidth = temperatureFont.getTextWidth('00');

  return (
    <Canvas
      style={{
        width,
        height: CANVAS_HEIGHT,
      }}
      onTouch={onTouch}
    >
      <Circle cx={width / 2} cy={CANVAS_HEIGHT / 2} r={145} color="#E3EDF7">
        <Shadow dx={-10} dy={-10} blur={15} color="#F3FAFF" />
        <Shadow dx={10} dy={10} blur={15} color="#C2D0DD" />
      </Circle>

      <Circle cx={width / 2} cy={CANVAS_HEIGHT / 2} r={129} color="#E3EDF7">
        <Shadow dx={-3.4} dy={-3.4} blur={15} color="#F3FAFF" inner />
        <Shadow
          dx={1.1}
          dy={1.1}
          blur={60}
          color="rgba(107, 130, 153, 0.24)"
          inner
        />
      </Circle>

      <Group>
        <SweepGradient
          c={vec(width / 2, CANVAS_HEIGHT / 2)}
          colors={['#28b0ea', '#0008e1']}
        />

        <Path
          path={path}
          style="stroke"
          strokeWidth={54}
          end={percent}
          strokeCap="round"
        />

        <Circle
          cx={width / 2 + 102}
          cy={CANVAS_HEIGHT / 2}
          r={27}
          color="#28b0ea"
        />
      </Group>

      <Circle cx={width / 2} cy={CANVAS_HEIGHT / 2} r={75} color="#E3EDF7">
        <Shadow dx={-10} dy={-10} blur={40} color="#F3FAFF" />
        <Shadow dx={10} dy={10} blur={40} color="#C2D0DD" />
      </Circle>

      <Circle cx={width / 2} cy={CANVAS_HEIGHT / 2} r={49} color="#E3EDF7">
        <Shadow dx={-10} dy={-10} blur={40} color="#F3FAFF" />
        <Shadow dx={10} dy={10} blur={40} color="#C2D0DD" />
      </Circle>

      <Text
        text={temperature}
        x={width / 2 - temperatureTextWidth / 2}
        y={CANVAS_HEIGHT / 2 + temperatureFont.getSize() / 2}
        font={temperatureFont}
        color="black"
      />
      <Text
        text="°C"
        x={width / 2 + 15}
        y={CANVAS_HEIGHT / 2 + celsiusFont.getSize() / 2}
        font={celsiusFont}
        color="rgba(42,64,103, 0.5)"
      />
    </Canvas>
  );
}

export default CircularSlider;
