import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import XAxis from './xAxis';
import YAxis from './yAxis';
import Columns from './Columns';

export default function BarGraph() {
  let width = Dimensions.get('screen').width;
  let xAxisHeight = 30;
  let yAxisHeight = 325;

  return (
    <View style={styles.main}>
      <YAxis height={yAxisHeight} width={width} />

      <Columns />

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
