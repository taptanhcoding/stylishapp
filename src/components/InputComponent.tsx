import React, {forwardRef, memo, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const InputComponent = forwardRef(function InputComponent(props: any, ref) {
  const {
    prefix,
    suffix,
    type,
    styleWrappe,
    styleInput,
    onPressSuffix,
    ...rest
  } = props;
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(
    type === 'password' ? true : false,
  );
  return (
    <View
      style={[
        styles.container,
        styleWrappe || {},
      ]}>
      <TouchableWithoutFeedback>
        <View style={styles.prefix}>{prefix}</View>
      </TouchableWithoutFeedback>
      <TextInput
        ref={ref}
        style={[
          {
            fontSize: 16,
          },
          styleInput || {},
        ]}
        {...rest}
        secureTextEntry={isSecureTextEntry}
      />
      <View style={styles.suffix}>
        <TouchableWithoutFeedback
          onPress={() =>
            onPressSuffix
              ? onPressSuffix()
              : setIsSecureTextEntry(!isSecureTextEntry)
          }>
          <View>{suffix}</View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    paddingLeft: 39,
    paddingRight: 39,
    position: 'relative',
  },
  prefix: {
    position: 'absolute',
    left: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  suffix: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  input: {
    padding: 16,
  },
});

export default InputComponent;
// export default memo(InputComponent)
