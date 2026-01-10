import { View } from 'react-native';

type BarrierProps = {
  width: number;
  height: number;
  color: string;
  borderRadius?: number;
};

function Barrier({ width, height, color, borderRadius }: BarrierProps) {
  return (
    <View
      style={{ width, height, backgroundColor: color, borderRadius }}
    ></View>
  );
}

export default Barrier;
