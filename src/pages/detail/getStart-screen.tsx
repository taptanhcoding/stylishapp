import React, { useCallback,useEffect } from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default memo(function GetStartScreen() {
  const navigation = useNavigation();
  const gotoHome = useCallback(async() => {
    await AsyncStorage.setItem('onboarding', 'true');
    navigation.navigate('Home',{screen: 'Home'})
  },[])
  useEffect(() => {
    (async() => {
        let onboarding = await AsyncStorage.getItem('onboarding');
        if(onboarding){
            navigation.navigate('Home',{screen: 'Home'})
        }
    })()
  },[])
  return (
    <ImageBackground style={styles.container} source={require('./getstart.png')}>
      <View style={styles.content}>
        <Text style={[styles.textCenter, styles.title]}>You want Authentic, here you go!</Text>
        <Text style={[styles.textCenter, styles.description]}>Find it here, buy it now!</Text>
        <TouchableOpacity style={styles.button} onPress={gotoHome}>
          <View >
              <Text style={styles.textButton}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        resizeMode: 'contain'
    },
    content:{
        position: 'absolute',
        bottom: 34,
        width: '100%',
        zIndex: 100
    },
    textCenter: {
        textAlign: 'center',
        color: '#fff'
    },
    title: {
        fontSize: 34,
        fontWeight: 'semibold'
    },
    description: {
        fontSize: 14,
    },
    button:{
        backgroundColor: '#F83758',
        borderRadius:4,
        paddingTop:21,
        paddingBottom:21,
        margin: "auto",
        width:"80%"
    },
    textButton: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'semibold',
        textAlign: 'center'
    }
})