import React, {useState} from 'react';
// import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {data} from './data';
import DotPaging from './dotPaging';

export default memo(function SplashScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = React.useRef(null);
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = React.useRef(({viewableItems}:any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  
  function ScrollToNext(){
    if(currentIndex < data.length - 1){
      sliderRef.current.scrollToIndex({index: currentIndex + 1});
    }
  }
  function ScrollToPrev(){
    if(currentIndex > 0){
      sliderRef.current.scrollToIndex({index: currentIndex - 1});
    }
  }

const setViewedOnboarding = async() => {
  try{
    await AsyncStorage.setItem('@viewedOnboarding', 'true');
    navigation.navigate('Home');
  }catch(error){
    console.log(error);
  }
}

  const viewConfig = React.useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
      <View style={{width: '100%',paddingLeft:38,paddingRight:38,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.textHeader}> {currentIndex + 1}</Text><Text style={[styles.textHeader,{color:'#A0A0A1'}]} >/{data.length}</Text>
        </View>
        <TouchableWithoutFeedback onPress={setViewedOnboarding}>
          <Text style={styles.textHeader}>Skip</Text>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{useNativeDriver: false})}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        showsHorizontalScrollIndicator={false}
        ref={sliderRef}
        
        renderItem={({item}) => (
          <View style={{width, padding: 38}}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.textContainer}>
              <Text style={[styles.title, styles.textCenter]}>{item.title}</Text>
              <Text style={[styles.des, styles.textCenter]}>{item.des}</Text>
            </View>
          </View>
        )}
      />
        <View style={styles.footer}>
         <TouchableWithoutFeedback onPress={ScrollToPrev}>
           <View>
            <Text style={styles.prev}>{currentIndex > 0 ? 'Prev' : ''}</Text>
           </View>
         </TouchableWithoutFeedback>
          <DotPaging data={data} scrollX={scrollX} />
          <TouchableWithoutFeedback onPress={currentIndex < data.length - 1 ? ScrollToNext : setViewedOnboarding}>
            <View>
              <Text style={styles.next}>{currentIndex < data.length - 1 ? 'Next' : 'Get Started'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader:{
    fontSize: 18,
    fontWeight: 'semibold',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    objectFit: 'contain',
  },
  textContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  des: {
    fontSize: 16,
    color: '#808080',
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 38,
    paddingRight: 38,
  },
  prev:{
    fontSize: 18,
    fontWeight: 'semibold',
    color:'#C4C4C4',
  },
  next:{
    fontSize: 18,
    fontWeight: 'semibold',
    color:'#F83758',
    textAlign: 'right',
  }
});
