import { Group, Fill, rect } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import BilinearGradient from '../BilinearGradient';

function Background() {
  const { width, height } = useWindowDimensions();

  return (
    <Group>
      <Fill>
        <BilinearGradient
          colors={['#FAC6C0', '#EBBFF6', '#F5DFE6', '#F2DCF6']}
          rect={rect(0, 0, width, height)}
        />
      </Fill>
    </Group>
  );
}

export default Background;
