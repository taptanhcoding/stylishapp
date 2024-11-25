import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {View, Text} from 'react-native';

export default memo(function SearchScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Search</Text>
      <Button onPress={() => navigation.navigate('Trending')}>Goto Home</Button>
    </View>
  );
});
