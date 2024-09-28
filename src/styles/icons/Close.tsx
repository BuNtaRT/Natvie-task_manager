import { View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

export const Close = () => {
  return (
    <View>
      <Svg viewBox='0 0 32 32'>
        <Line
          fill='none'
          stroke='#000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          x1='7'
          x2='25'
          y1='7'
          y2='25'
        />
        <Line
          fill='none'
          stroke='#000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          x1='7'
          x2='25'
          y1='25'
          y2='7'
        />
      </Svg>
    </View>
  );
};
