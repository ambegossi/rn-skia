import {
  Canvas,
  Fill,
  runTiming,
  useTouchHandler,
  useValue,
} from '@shopify/react-native-skia';
import { Dimensions } from 'react-native';
import NeumorphicSwitch from '../../components/NeumorphicSwitch';

const { width } = Dimensions.get('window');
const PADDING = 32;
const size = width - PADDING * 2;
const x = PADDING;
const y = 75;

function NeumorphismSwitch() {
  const pressed = useValue(0);

  const onTouch = useTouchHandler({
    onEnd: () => {
      runTiming(pressed, pressed.current === 1 ? 0 : 1, { duration: 150 });
    },
  });

  return (
    <Canvas style={{ flex: 1 }} onTouch={onTouch}>
      <Fill color="#F0F0F3" />

      <NeumorphicSwitch x={x} y={y} size={size} pressed={pressed} />
    </Canvas>
  );
}

export default NeumorphismSwitch;
