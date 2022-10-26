import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import {
  BackdropBlur,
  Canvas,
  Circle,
  Group,
  Image,
  ImageSVG,
  LinearGradient,
  rect,
  Rect,
  RoundedRect,
  rrect,
  runDecay,
  Shadow,
  Text,
  useComputedValue,
  useFont,
  useImage,
  useSVG,
  useTouchHandler,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import Background from './components/Background';

// Assets
import montserratBold from '../../assets/fonts/Montserrat-Bold.ttf';
import chip from '../../assets/images/chip.png';
import connection from '../../assets/icons/connection.svg';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width - 64;
const CARD_HEIGHT = CARD_WIDTH * 0.61;

function PremiumCard() {
  const membershipFont = useFont(montserratBold, 10);
  const nameFont = useFont(montserratBold, 14);
  const chipImage = useImage(chip);
  const connectionSvg = useSVG(connection);

  const clip = useMemo(
    () => rrect(rect(0, 0, CARD_WIDTH, CARD_HEIGHT), 15, 15),
    [],
  );

  // Card animation
  const x = useValue((width - CARD_WIDTH) / 2);
  const y = useValue((height - CARD_HEIGHT) / 2);
  const offsetX = useValue(0);
  const offsetY = useValue(0);
  const onTouch = useTouchHandler({
    onStart: pos => {
      offsetX.current = x.current - pos.x;
      offsetY.current = y.current - pos.y;
    },
    onActive: pos => {
      x.current = offsetX.current + pos.x;
      y.current = offsetY.current + pos.y;
    },
    onEnd: ({ velocityX, velocityY }) => {
      runDecay(x, { velocity: velocityX });
      runDecay(y, { velocity: velocityY });
    },
  });

  const transform = useComputedValue(
    () => [{ translateX: x.current }, { translateY: y.current }],
    [x, y],
  );

  return (
    <Canvas style={{ flex: 1, backgroundColor: '#202020' }} onTouch={onTouch}>
      <Background />

      <BackdropBlur blur={3} clip={clip} transform={transform}>
        <BackdropBlur blur={3}>
          <BackdropBlur blur={3}>
            <RoundedRect
              x={0}
              y={0}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              style="stroke"
              r={15}
              strokeWidth={2}
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(256, 256)}
                colors={['rgba(255,255,255, 0.5)', 'rgba(255,31,1, 0.5)']}
              />

              <Rect x={0} y={0} width={CARD_WIDTH} height={CARD_HEIGHT}>
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(256, 256)}
                  colors={['rgba(255,255,255, 0.4)', 'rgba(255,255,255, 0.1)']}
                />

                <Shadow dx={0} dy={6} blur={20} color="black" />

                {!!membershipFont && (
                  <Text
                    text="MEMBERSHIP"
                    x={40}
                    y={40}
                    color="white"
                    font={membershipFont}
                  />
                )}

                <Group opacity={0.9}>
                  <Circle r={20} cy={40} cx={CARD_WIDTH - 40} color="#B8B8B8" />
                  <Circle r={20} cy={40} cx={CARD_WIDTH - 60} color="#5B5B5B" />
                </Group>

                {!!connectionSvg && (
                  <ImageSVG
                    svg={connectionSvg}
                    x={93}
                    y={CARD_HEIGHT / 2 - 8}
                    width={13}
                    height={17}
                  />
                )}

                {!!nameFont && (
                  <Text
                    text="DAVID R MEDEIROS"
                    x={40}
                    y={CARD_HEIGHT - 30}
                    color="white"
                    font={nameFont}
                  />
                )}
              </Rect>
            </RoundedRect>

            {!!chipImage && (
              <Image
                x={40}
                y={CARD_HEIGHT / 2 - 15}
                image={chipImage}
                width={40}
                height={30}
              />
            )}
          </BackdropBlur>
        </BackdropBlur>
      </BackdropBlur>
    </Canvas>
  );
}

export default PremiumCard;
