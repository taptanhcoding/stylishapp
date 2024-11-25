import React from 'react';
import {Animated, StyleSheet, View, useWindowDimensions} from 'react-native';

export default function DotPaging({
  data,
  scrollX,
}: {
  data: any[];
  scrollX: any;
}) {
    const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 40, 10],
            extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot,{width:dotWidth, opacity}]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:64,
    width:80,
    position:'absolute',
    left:"50%",
},
dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#17223B',
    marginHorizontal: 5,
  },
});
