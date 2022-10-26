import { Group, Text, useFont } from '@shopify/react-native-skia';
import Button, { BUTTON_SIZE } from '../Button';
import ChevronLeft from '../icons/ChevronLeft';
import { Cog } from '../icons/Cog';

// Assets
import sfProDisplayBold from '../../../../assets/fonts/SF-Pro-Display-Bold.otf';

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  const font = useFont(sfProDisplayBold, 28);

  if (!font) {
    return null;
  }

  const titleWidth = font.getTextWidth(title);
  const offsetX = 30 + BUTTON_SIZE;
  const space = 298 - offsetX;

  return (
    <Group transform={[{ translateY: 64 }]}>
      <Button x={30} y={0}>
        <ChevronLeft />
      </Button>

      <Text
        text={title}
        x={offsetX + (space - titleWidth) / 2}
        y={BUTTON_SIZE - font.getSize()}
        font={font}
        color="white"
      />

      <Button x={298} y={0}>
        <Cog />
      </Button>
    </Group>
  );
}

export default Title;
