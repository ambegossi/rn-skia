import { Circle, RadialGradient, vec } from '@shopify/react-native-skia';

function Background() {
  return (
    <>
      <Circle cx={100} cy={155} r={30} color="#E70B0B" />

      <Circle cx={325} cy={285} r={100} color="white">
        <RadialGradient
          c={vec(250, 345)}
          r={200}
          colors={['#FFA800', '#FF0000']}
        />
      </Circle>

      <Circle cx={90} cy={480} r={70} color="#FFA800" />
    </>
  );
}

export default Background;
