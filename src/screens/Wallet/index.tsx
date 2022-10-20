/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Canvas,
  useComputedValue,
  useValue,
  Group,
  Path,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia';
import { useMemo } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useGraphTouchHandler } from '../../hooks/useGraphTouchHandler';
import Header from './components/Header';
import Label from './components/Label';
import Cursor from './components/Cursor';
import Selection from './components/Selection';
import List from './components/List';
import { getYForX } from './utils/math';
import { COLORS, getGraph } from './utils/model';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
});

const PADDING = 16;

function Wallet() {
  const window = useWindowDimensions();
  const { width } = window;
  const height = Math.min(window.width, window.height) / 2;
  const translateY = height + PADDING;
  const graphs = useMemo(() => getGraph(width, height), [width, height]);
  const transition = useValue(0);

  // indexes of the current and next graphs
  const indexes = useValue({
    next: 0,
    current: 0,
  });
  const path = useComputedValue(() => {
    const { current, next } = indexes.current;

    const start = graphs[current].data.path;
    const end = graphs[next].data.path;

    return end.interpolate(start, transition.current)!;
  }, [indexes, transition]);

  // x and y values of the cursor
  const x = useValue(0);
  const y = useComputedValue(
    () => getYForX(path.current.toCmds(), x.current),
    [x, path],
  );

  const onTouch = useGraphTouchHandler(x, y, width, height);

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.container}>
        <Header />

        <Canvas style={{ width, height: 2 * height + 30 }} onTouch={onTouch}>
          <Label
            state={indexes}
            y={y}
            graphs={graphs}
            width={width}
            height={height}
          />

          <Group transform={[{ translateY }]}>
            <Path
              style="stroke"
              path={path}
              strokeWidth={4}
              strokeJoin="round"
              strokeCap="round"
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(width, 0)}
                colors={COLORS}
              />
            </Path>
            <Cursor x={x} y={y} width={width} />
          </Group>
        </Canvas>
        <Selection state={indexes} transition={transition} graphs={graphs} />
        <List />
      </View>
    </>
  );
}

export default Wallet;
