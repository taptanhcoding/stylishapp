/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {lazy, useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeIcon} from '../components/icons/HomeIcon';
import {HeartIcon} from '../components/icons/HeartIcon';
import {CartIcon} from '../components/icons/CartIcon';
import {SearchIcon} from '../components/icons/SearchIcon';
import {SettingIcon} from '../components/icons/SettingIcon';
import {Text, TouchableOpacity, View} from 'react-native';
import ContentLayout from '../components/layout';
import ErrorBoundary from '../components/ErrorBoundary';

//auth
const SigninScreen = lazy(() => import('../pages/auth/signin-screen'));
const ProfileScreen = lazy(() => import('../pages/auth/profile-screen'));
//detail
const HomeScreen = lazy(() => import('../pages/detail/home-screen'));
const GetStartScreen = lazy(() => import('../pages/detail/getStart-screen'));
const TrendingScreen = lazy(() => import('../pages/detail/trending-screen'));
const ShopScreen = lazy(() => import('../pages/detail/shop-screen'));
const ShippingScreen = lazy(() => import('../pages/detail/shipping-screen'));
const CheckoutScreen = lazy(() => import('../pages/detail/checkout-screen'));
const SearchScreen = lazy(() => import('../pages/detail/search-screen'));
const SettingScreen = lazy(() => import('../pages/detail/setting-screen'));

//splash
const SplashScreen = lazy(() => import('../pages/splash'));

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function NavTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
      }}
      initialRouteName="Home"
      layout={({children}) => (
        <ErrorBoundary>
          <React.Suspense
            fallback={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Loading…</Text>
              </View>
            }>
            {children}
          </React.Suspense>
        </ErrorBoundary>
      )}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
          tabBarActiveTintColor: '#EB3030',
          tabBarInactiveTintColor: '#000000',
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={TrendingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <HeartIcon color={color} size={size} />
          ),
          tabBarActiveTintColor: '#EB3030',
          tabBarInactiveTintColor: '#000000',
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({color, size}) => <CartIcon color={color} size={size} />,
          tabBarLabel: '',
          tabBarInactiveTintColor: '#000',
          tabBarActiveTintColor: '#fff',
          // tabBarLabelStyle: ,
          tabBarButton: (props: any) => {
            const {
              accessibilityState: {selected},
              children,
              onPress,
              onLongPress,
              ...rest
            } = props;
            console.log({rest});

            return (
              <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  position: 'absolute',
                  top: -15,
                  left: '50%',
                  transform: [{translateX: -27}],
                  padding: 12.5,
                  paddingLeft: 11,
                  borderRadius: 100,
                  elevation: 5, // Thay thế cho boxShadow trên Android
                  shadowColor: '#000', // Dành cho iOS
                  shadowOffset: {width: 0, height: 2}, // Dành cho iOS
                  shadowOpacity: 0.1, // Dành cho iOS
                  shadowRadius: 5, // Dành cho iOS
                  zIndex: 1000,
                  backgroundColor: selected ? '#EB3030' : '#fff',
                  width: 54,
                  height: 54,
                }}>
                {children}
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SearchIcon color={color} size={size} />
          ),
          tabBarActiveTintColor: '#EB3030',
          tabBarInactiveTintColor: '#000000',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SettingIcon color={color} size={size} />
          ),
          tabBarActiveTintColor: '#EB3030',
          tabBarInactiveTintColor: '#000000',
        }}
      />
    </Tab.Navigator>
  );
}

export const Navigation = () => {
  const navigation = useNavigation();
  const checkViewedOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      const valueAuth = await AsyncStorage.getItem('auth');
      if (value !== null && valueAuth == null) {
        navigation.navigate('Signin', {
          screen: 'Signin',
        });
      } else if (value !== null && valueAuth !== null) {
        navigation.navigate('Home', {screen: 'Home'});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkViewedOnboarding();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GetStart" component={GetStartScreen} />
      <Stack.Screen name="Home" component={NavTab} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};
