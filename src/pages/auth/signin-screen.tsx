import React, {useCallback} from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
} from 'react-native';
import ContentLayout from '../../components/layout';
import InputComponent from '../../components/InputComponent';
import {UserIcon} from '../../components/icons/UserIcon';
import {LockIcon} from '../../components/icons/LockIcon';
import {EyeIcon} from '../../components/icons/EyeIcon';
import {MailIcon} from '../../components/icons/MailIcon';
import {GoogleIcon} from '../../components/icons/GoogleIcon';
import {AppleIcon} from '../../components/icons/AppleIcon';
import {FacebookIcon} from '../../components/icons/FacebookIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
function RenderTitle(screen: string) {
  switch (screen) {
    case 'Signin':
      return 'Welcome Back!';
    case 'Signup':
      return 'Create an account';
    case 'ForgotPassword':
      return 'Forgot Password?';
  }
}

function RenderTitleButton(screen: string) {
  switch (screen) {
    case 'Signin':
      return 'Login';
    case 'Signup':
      return 'Create Account';
    case 'ForgotPassword':
      return 'Submit';
  }
}

export default memo(function SigninScreen() {
  const navigation = useNavigation();
  const router = useRoute();
  const {screen} = router.params as any;
  console.log({screen});

  const SwitchScreen = useCallback((screen: string) => {
    navigation.setParams({screen: screen} as any);
  }, []);
  const handleSubmit = useCallback(async () => {
    let onboarding = await AsyncStorage.setItem('auth', 'true');
    navigation.navigate(onboarding ? 'Home' : ('GetStart' as never));
  }, []);
  return (
    <ContentLayout>
      <View>
        <Text style={styles.title}>{RenderTitle(screen)}</Text>

        <View style={styles.inputContainer}>
          {screen !== 'ForgotPassword' && (
            <View style={styles.inputItem}>
              <InputComponent
                backgroundColor="#F3F3F3"
                placeholder="Username or Email"
                prefix={<UserIcon />}
              />
            </View>
          )}

          {screen === 'ForgotPassword' && (
            <View>
              <View style={styles.inputItem}>
                <InputComponent
                  backgroundColor="#F3F3F3"
                  placeholder="Enter your email address"
                  prefix={<MailIcon />}
                />
              </View>
              <Text style={styles.textForgotPassword}>
                <Text style={styles.textRegisterBold}>*</Text>
                We will send you a message to set or reset your new password
              </Text>
            </View>
          )}
          {screen !== 'ForgotPassword' && (
            <View
              style={[
                styles.inputItem,
                screen === 'Signin' && {marginBottom: 9},
              ]}>
              <InputComponent
                type="password"
                backgroundColor="#F3F3F3"
                placeholder="Password"
                prefix={<LockIcon />}
                suffix={<EyeIcon />}
              />
            </View>
          )}
          {screen === 'Signin' && (
            <TouchableWithoutFeedback
              onPress={() => SwitchScreen('ForgotPassword')}>
              <View>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          {screen === 'Signup' && (
            <View>
              <View style={styles.inputItem}>
                <InputComponent
                  type="password"
                  backgroundColor="#F3F3F3"
                  placeholder="Confirm Password"
                  prefix={<LockIcon />}
                  suffix={<EyeIcon />}
                />
              </View>
              <Text style={styles.textRegister}>
                By clicking the{' '}
                <Text style={styles.textRegisterBold}>Register</Text> button,
                you agree to the public offer
              </Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>{RenderTitleButton(screen)}</Text>
          </View>
        </TouchableOpacity>
        {screen !== 'ForgotPassword' && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>- OR Continue with -</Text>
            <View style={styles.loginWith}>
              <TouchableWithoutFeedback>
                <View style={styles.loginWithItem}>
                  <GoogleIcon />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.loginWithItem}>
                  <AppleIcon />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.loginWithItem}>
                  <FacebookIcon />
                </View>
              </TouchableWithoutFeedback>
            </View>
            {screen === 'Signin' && (
              <TouchableWithoutFeedback onPress={() => SwitchScreen('Signup')}>
                <View>
                  <Text style={[styles.footerText, styles.footerText2]}>
                    Create an account{' '}
                    <Text style={styles.footerTextBold}>Sign up</Text>
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            {screen === 'Signup' && (
              <TouchableWithoutFeedback onPress={() => SwitchScreen('Signin')}>
                <View>
                  <Text style={[styles.footerText, styles.footerText2]}>
                    I Already Have an Account{' '}
                    <Text style={styles.footerTextBold}>Login</Text>
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
        )}
      </View>
    </ContentLayout>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    width: '55%',
  },
  inputContainer: {
    marginTop: 36,
    marginBottom: 52,
  },
  inputItem: {
    marginBottom: 31,
  },
  textForgotPassword: {
    fontSize: 14,
    textAlign: 'left',
    color: '#676767',
    marginBottom: 36,
  },
  forgotPassword: {
    marginBottom: 16,
    color: '#F83758',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
  },
  textRegister: {
    fontSize: 14,
    textAlign: 'left',
    color: '#676767',
  },
  textRegisterBold: {
    color: '#FF4B26',
  },
  button: {
    backgroundColor: '#F83758',
    borderRadius: 10,
  },
  buttonView: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'semibold',
  },
  footer: {
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#676767',
    marginBottom: 20,
  },
  footerTextBold: {
    color: '#FF4B26',
    fontWeight: 'bold',
  },
  loginWith: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  loginWithItem: {
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    borderColor: '#F83758',
    borderStyle: 'solid',
    borderRadius: 50,
  },
  footerText2: {
    fontSize: 17,
  },
});
