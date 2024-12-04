import React from 'react';
import {memo} from 'react';
import {
  View,
  Text,
  VirtualizedList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import ContentLayout from '../../components/layout';
import {HeaderFilter, HeaderTop} from '../../components/layout/header';
export default memo(function HomeScreen() {
  const {height,width} = useWindowDimensions();
  return (
    <ContentLayout>
      <HeaderTop/>
      <HeaderFilter title="All Featured"/>
      <View style={{height:50,backgroundColor: "white"}}></View>
    </ContentLayout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  item: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});
