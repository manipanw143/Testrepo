import React from 'react';
import { Text, View } from 'react-native';
import { HelloWave } from '../../components/HelloWave';

export default function HomeScreen() {
  return (
   <View>
    <Text>Hello From Index HY</Text>
    <HelloWave/>
   </View>
  );
}

const styles = {
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },
  stepContainer: {
    gap: '8px',
    marginBottom: '8px',
  },
  reactLogo: {
    height: '178px',
    width: '290px',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
};
