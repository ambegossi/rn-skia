/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import type { SkiaMutableValue } from '@shopify/react-native-skia';
import {
  Canvas,
  Easing,
  Group,
  LinearGradient,
  RoundedRect,
  runTiming,
  useComputedValue,
  vec,
  mix,
} from '@shopify/react-native-skia';
import { Graphs } from '../../utils/model';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  container: {
    backgroundColor: '#272636',
    borderRadius: 16,
    flexDirection: 'row',
  },
  button: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export interface GraphState {
  next: number;
  current: number;
}

interface SelectionProps {
  state: SkiaMutableValue<GraphState>;
  transition: SkiaMutableValue<number>;
  graphs: Graphs;
}

function Selection({ state, transition, graphs }: SelectionProps) {
  const { width } = useWindowDimensions();

  const buttonWidth = useMemo(
    () => (width - 32) / graphs.length,
    [graphs.length, width],
  );

  const transform = useComputedValue(() => {
    const { current, next } = state.current;
    return [
      {
        translateX: mix(
          transition.current,
          current * buttonWidth,
          next * buttonWidth,
        ),
      },
    ];
  }, [state, transition]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Group transform={transform}>
            <RoundedRect x={0} y={0} height={64} width={buttonWidth} r={16}>
              <LinearGradient
                colors={['#31CBD1', '#61E0A1']}
                start={vec(0, 0)}
                end={vec(buttonWidth, 64)}
              />
            </RoundedRect>
          </Group>
        </Canvas>
        {graphs.map((graph, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              state.current.current = state.current.next;
              state.current.next = index;
              transition.current = 0;
              runTiming(transition, 1, {
                duration: 750,
                easing: Easing.inOut(Easing.cubic),
              });
            }}
          >
            <View style={[{ width: buttonWidth }, styles.button]}>
              <Text style={styles.label}>{graph.label}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
}

export default Selection;
