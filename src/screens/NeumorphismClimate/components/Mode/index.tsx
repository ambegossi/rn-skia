import {
  BackdropBlur,
  Fill,
  Group,
  rect,
  RoundedRect,
  rrect,
  SkiaValue,
  useComputedValue,
  useImage,
  Image,
} from '@shopify/react-native-skia';

// Assets
import settings from '../../../../assets/images/settings.png';

const clip = rrect(rect(0, 596, 390, 844), 40, 40);

interface ModeProps {
  translateY: SkiaValue<number>;
}

function Mode({ translateY }: ModeProps) {
  const transform = useComputedValue(
    () => [{ translateY: translateY.current }],
    [translateY],
  );
  const image = useImage(settings);

  if (!image) {
    return null;
  }

  return (
    <Group transform={transform}>
      <BackdropBlur blur={40 / 3} clip={clip}>
        <Fill color="rgba(255, 255, 255, 0.1)" />
        <Group>
          <RoundedRect
            rect={clip}
            style="stroke"
            strokeWidth={1}
            color="rgba(200, 200, 200, 0.5)"
          />
        </Group>
      </BackdropBlur>

      <Image image={image} x={0} y={556} width={390} height={248} />
    </Group>
  );
}

export default Mode;
