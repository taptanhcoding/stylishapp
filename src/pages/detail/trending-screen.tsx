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
const DATA = Array.from({length: 20}, (_, index) => `Item ${index + 1}`);

const getItem = (data: string[], index: number) => data[index];
const getItemCount = (data: string[]) => data.length;
const addHeader=(data:any[]) => [{type:"header",component: <HeaderTop/>},{type: "header",component: <HeaderFilter/>},...data]
export default memo(function TrendingScreen() {
  // const navigation = useNavigation();

  return (
    <ContentLayout>
    <VirtualizedList
      nestedScrollEnabled
      data={addHeader(DATA)}
      getItemCount={getItemCount}
      getItem={getItem}
      keyExtractor={(item, index) => index.toString()}
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      renderItem={({item}:any) => (
        item.type == "header" ? item.component :  <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
    />
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