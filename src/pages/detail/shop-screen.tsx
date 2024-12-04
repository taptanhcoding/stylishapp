import React from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {View, Text} from 'react-native';

export default memo(function ShopScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button >
        Goto Trending
      </Button>
    </View>
  );
});
