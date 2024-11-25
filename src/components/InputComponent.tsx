import React, { memo, useState } from "react";
import { StyleSheet, TextInput,TouchableWithoutFeedback,View } from "react-native";


export default memo(function InputComponent(props:any){
const {prefix,suffix,type,backgroundColor,...rest} = props;
const [isSecureTextEntry,setIsSecureTextEntry] = useState(type === "password" ? true : false);
  return <View style={[styles.container, {backgroundColor: backgroundColor|| "#fff"}]}>
    <View style={styles.prefix}>
    {prefix}
    </View>
    <TextInput style={{
        fontSize:16
    }} {...rest} secureTextEntry={isSecureTextEntry} />
    <View  style={styles.suffix}>
      <TouchableWithoutFeedback onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
        <View>
          {suffix}
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
})

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    paddingLeft: 39,
    paddingRight: 39,
    position:'relative',
    
  },
  prefix: {
    position:'absolute',
    left:12,
    top:0,
    bottom:0,
    justifyContent:'center'
  },
  suffix: {
    position:'absolute',
    right:12,
    top:0,
    bottom:0,
    justifyContent:'center'
  },
  input: {
    padding: 16,
  }
})
