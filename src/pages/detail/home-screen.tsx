import React from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {View, Text} from 'react-native';
import ContentLayout from '../../components/layout';

export default memo(function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ContentLayout>
      <View>
        <Text>HomeScreen</Text>
        <Button onPress={() => navigation.navigate('Trending')}>
          Goto Trending
        </Button>
      </View>
    </ContentLayout>
  );
});
