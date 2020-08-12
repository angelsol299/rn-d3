import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import XAxis from './xAxis';
import YAxis from './yAxis';
import Columns from './Columns';

export default function BarGraph({data, color}) {
  let width = Dimensions.get('screen').width;
  let xAxisHeight = 30;
  let yAxisHeight = 325;
  let barsHeight = 315;

  return (
    <View style={styles.main}>
      <YAxis height={yAxisHeight} width={width} />

      <Columns
        data={data}
        width={width - 10}
        height={barsHeight}
        color={color}
      />

      <XAxis width={width - 10} height={xAxisHeight} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 25,
    marginHorizontal: 0,
  },
});
