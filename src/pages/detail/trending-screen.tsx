import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {View, Text} from 'react-native';

export default memo(function TrendingScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>TrendingScreen</Text>
      <Button onPress={() => navigation.navigate('Trending')}>Goto Home</Button>
    </View>
  );
});
